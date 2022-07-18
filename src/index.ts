import { toString } from "qrcode";
import { WifiAuthenticationType, encodeWifiConfig } from "wifi-qr";

async function waitForSvg(object: HTMLObjectElement): Promise<void> {
  if (object?.contentDocument?.querySelector("#qrcode")) {
    console.log("qrcode exists");
    return;
  }
  await new Promise((resolve) => setTimeout(resolve, 50));
  return waitForSvg(object);
}

async function init() {
  const form = document.querySelector("form");
  const textarea = document.querySelector("textarea");
  const objects = Array.from(document.querySelectorAll<HTMLObjectElement>(".giraffe object"));

  await Promise.all(objects.map((object) => waitForSvg(object)));

  const svgs = objects.map((object) => object.contentDocument);

  void drawGiraffes("Never gonna give you up");

  ["input", "change"].forEach((eventName) =>
    form.addEventListener(eventName, () => {
      void drawGiraffes(
        encodeWifiConfig({
          ssid: form.querySelector<HTMLInputElement>("[name=ssid]").value,
          password: form.querySelector<HTMLInputElement>("[name=passphrase]").value,
          type: form.querySelector<HTMLSelectElement>("[name=encryption]").value as WifiAuthenticationType,
          hidden: form.querySelector<HTMLInputElement>("[name=hidden]").checked,
        })
      );
    })
  );

  textarea.addEventListener("input", () => {
    textarea.value && drawGiraffes(textarea.value);
  });

  document.addEventListener("click", (event) => {
    const target: HTMLButtonElement = event.target as HTMLButtonElement;
    if (target.matches(".download-svg")) {
      event.stopPropagation();
      const giraffe = target.closest(".giraffe");
      const toDataURL = (url: string) =>
        fetch(url)
          .then((response) => response.blob())
          .then(
            (blob): Promise<string> =>
              new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result as string);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
              })
          );

      void Promise.all(
        [".void", ".fill"].map((sourceClass) => toDataURL(giraffe.querySelector<HTMLSourceElement>(sourceClass).srcset))
      ).then(([voidData, fillData]) => {
        console.log(voidData.length, fillData.length);
        const svg = giraffe.querySelector("object").contentDocument.cloneNode(true) as Document;
        svg.querySelector<SVGImageElement>("#fill").setAttribute("href", fillData);
        svg.querySelector<SVGImageElement>("#void").setAttribute("href", voidData);
        const as_text = new XMLSerializer().serializeToString(svg);
        // store in a Blob
        const blob = new Blob([as_text], { type: "image/svg+xml" });
        // create an URI pointing to that blob
        const url = URL.createObjectURL(blob);
        const win = open(url);
        // so the Garbage Collector can collect the blob
        win.onload = () => URL.revokeObjectURL(url);
      });
    }
  });

  async function drawGiraffes(qrCode: string) {
    for (const svg of svgs) {
      const g = svg.querySelector("#qrcode");
      const svgString = await toString(qrCode, {
        type: "svg",
        errorCorrectionLevel: "L",
        margin: 2,
        width: +g.getAttribute("width"),
      });
      const path = new DOMParser().parseFromString(svgString, "image/svg+xml");
      g.replaceChildren(path.documentElement);
    }
  }
}

try {
  void init();
} catch (e) {
  console.log(e);
}
