import { Language } from "../../Utils/Language";

export class SettingDomain {
    Language: string;
    Zoom: number;

    constructor(language: string, zoom: number) {
        this.Language = language;
        this.Zoom = zoom;
    }

    static get default(): SettingDomain {
        return new SettingDomain(
            Language.English, 0
        );
    }
}