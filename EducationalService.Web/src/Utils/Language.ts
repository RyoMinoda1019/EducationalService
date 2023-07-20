export const Language = {
    Japanese: "Japanese",
    English: "English"
}

export class LanguageFlexible {
    English: string;
    Japanese: string;

    constructor(english: string, japanese: string) {
        this.English = english;
        this.Japanese = japanese;
    }

    getText(language: string): string {
        switch (language) {
            case Language.English:
                return this.English;
            case Language.Japanese:
                return this.Japanese;
        }
        return "";
    }
}