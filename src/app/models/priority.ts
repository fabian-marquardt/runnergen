import { Metatype } from './metatype';

export abstract class Priority {
    _selected_option: number;
    abstract getOptions(): string[];
    abstract getTitle(): string;
    abstract getSubtitle(): string;

    get selected_option(): number {
        return this._selected_option;
    }

    set selected_option(option: number) {
        console.log(option);
        if(option >= 0 && option < this.getOptions().length){
            this._selected_option = option;
        }
    }
}

export class MetatypePriority extends Priority {
    getOptions(): string[] {
        return [
            "Human(9), Elf(8), Orc(7), Dwarf(7), Troll(5)",
            "Human(7), Elf(6), Orc(4), Dwarf(4), Troll(0)",
            "Human(5), Elf(3), Dwarf(1), Orc(0)",
            "Human(3), Elf(0)",
            "Human(1)"
        ]
    }

    getTitle(): string {
        return "Metatype";
    }

    getSubtitle(): string {
        return "Select priority for metatype and special attribute points."
    }

    getAvailableMetatypes(): Metatype[] {
        switch(this.selected_option){
            case 0:
                return [Metatype.Human, Metatype.Elf, Metatype.Orc, Metatype.Dwarf, Metatype.Troll];
            case 1:
                return [Metatype.Human, Metatype.Elf, Metatype.Orc, Metatype.Dwarf, Metatype.Troll];
            case 2:
                return [Metatype.Human, Metatype.Elf, Metatype.Dwarf, Metatype.Orc];
            case 3:
                return [Metatype.Human, Metatype.Elf];
            case 4:
                return [Metatype.Human];
            default:
                return [];
        }
    }

    getSpecialAttributePoints(metatype: Metatype): number {
        switch(metatype){
            case Metatype.Human:
                return this.getHumanSpecialAttributePoints();
            case Metatype.Elf:
                return this.getElfSpecialAttributePoints();
            case Metatype.Orc:
                return this.getOrcSpecialAttributePoints();
            case Metatype.Dwarf:
                return this.getDwarfSpecialAttributePoints();
            case Metatype.Troll:
                return this.getTrollSpecialAttributePoints();
            default:
                return 0;
        }
    }

    getHumanSpecialAttributePoints(): number {
        switch(this.selected_option){
            case 0:
                return 9;
            case 1:
                return 7;
            case 2:
                return 5;
            case 3:
                return 3;
            case 4:
                return 1;
            default:
                return 0;
        }
    }

    getElfSpecialAttributePoints(): number {
        switch(this.selected_option){
            case 0:
                return 8;
            case 1:
                return 6;
            case 2:
                return 3;
            case 3:
                return 0;
            default:
                return 0;
        }
    }

    getOrcSpecialAttributePoints(): number {
        switch(this.selected_option){
            case 0:
                return 7;
            case 1:
                return 4;
            case 2:
                return 0;
            default:
                return 0;
        }
    }

    getDwarfSpecialAttributePoints(): number {
        switch(this.selected_option){
            case 0:
                return 7;
            case 1:
                return 4;
            case 2:
                return 1;
            default:
                return 0;
        }
    }

    getTrollSpecialAttributePoints(): number {
        switch(this.selected_option){
            case 0:
                return 5;
            case 1:
                return 0;
            default:
                return 0;
        }
    }

}

export class AttributePriority extends Priority {
    getOptions(): string[] {
        return [
            "24 attribute points",
            "20 attribute points",
            "16 attribute points",
            "14 attribute points",
            "12 attribute points"
        ]
    }

    getTitle(): string {
        return "Attribute";
    }

    getSubtitle(): string {
        return "Select priority for attribute points."
    }

    getAttributePoints(): number {
        switch(this.selected_option){
            case 0:
                return 24;
            case 1:
                return 20;
            case 2:
                return 16;
            case 3:
                return 14;
            case 4:
                return 12;
            default:
                return 0;
        }
    }
}