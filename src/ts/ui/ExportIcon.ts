import { ExportModal } from "./modals/ExportModal";
import type { GlslEditor } from "../GlslEditor";

export class ExportIcon {
  private el: HTMLDivElement;

  constructor(private main: GlslEditor) {
    this.el = document.createElement("div");
    this.el.setAttribute("class", "ge_export_icon");
    this.el.innerHTML = "△";
    // this.el.innerHTML = '<i class="material-icons">more_vert</i>';
    this.el.addEventListener(
      "click",
      (event) => {
        if (main.change || !this.modal) {
          this.modal = new ExportModal("ge_export", { main: main });
        }
        this.modal.presentModal(
          event.target.offsetLeft,
          event.target.offsetTop
        );
      },
      true
    );
    this.main.container.appendChild(this.el);
  }
}
