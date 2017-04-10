import { Attribute } from './attribute';
import { Metatype } from './metatype';
import { MagicAbility } from './magic-ability';


export class Character{
    private _metatype: Metatype;
    private _magic_ability: MagicAbility;
    private _attribute_points: number;

    // Special Attributes
    readonly edge: Attribute;
    readonly magic: Attribute;
    readonly resonance: Attribute;

    // Physical Attributes
    readonly body: Attribute;
    readonly agility: Attribute;
    readonly reaction: Attribute;
    readonly strength: Attribute;

    // Mental Attributes
    readonly willpower: Attribute = new Attribute("Willpower");
    readonly logic: Attribute = new Attribute("Logic");
    readonly intuition: Attribute = new Attribute("Intuition");
    readonly charisma: Attribute = new Attribute("Charisma");

    constructor(){

        // Init counters
        this._attribute_points = 0;

        // Init attributes
        this.edge = new Attribute("Edge");
        this.magic = new Attribute("Magic");
        this.resonance = new Attribute("Resonance");
        this.body = new Attribute("Body");
        this.agility = new Attribute("Agility");
        this.reaction = new Attribute("Reaction");
        this.strength = new Attribute("Strength");
        this.willpower = new Attribute("Willpower");
        this.logic = new Attribute("Logic");
        this.intuition = new Attribute("Intuition");
        this.charisma = new Attribute("Charisma");

        this.specialAttributes.forEach(element => {
            element.subscribeValueChange(() => this.recalculateSpecialAttributePoints());
        });

        this.physicalAttributes.forEach(element => {
            element.subscribeValueChange(() => this.recalculateAttributePoints());
        });

        this.mentalAttributes.forEach(element => {
            element.subscribeValueChange(() => this.recalculateAttributePoints());
        });

        // Metatype and Magic ability
        this.metatype = Metatype.Human;
        this.magic_ability = MagicAbility.Mundane;
    }

    get metatype(): Metatype {
        return this._metatype;
    }
    
    set metatype(metatype: Metatype) {
        this._metatype = metatype;
        switch (this._metatype) {
            case Metatype.Human:
                this.setHumanBaseValues();
                break;
            case Metatype.Elf:
                
                this.setElfBaseValues();
                break;
            case Metatype.Orc:
                this.setOrcBaseValues();
                break;
            case Metatype.Dwarf:
                this.setDwarfBaseValues();
                break;
            case Metatype.Troll:
                this.setTrollBaseValues();
                break;
        
            default:
                break;
        }
    }

    get magic_ability(): MagicAbility {
        return this._magic_ability;
    }

    set magic_ability(magic_ability: MagicAbility) {
        this._magic_ability = magic_ability;
    }

    setHumanBaseValues(){
        this.edge.base = 2;
        this.body.base = 1;
        this.agility.base = 1;
        this.reaction.base = 1;
        this.strength.base = 1;
        this.willpower.base = 1;
        this.logic.base = 1;
        this.intuition.base = 1;
        this.charisma.base = 1;

        this.edge.max = 7;
        this.body.max = 6;
        this.agility.max = 6;
        this.reaction.max = 6;
        this.strength.max = 6;
        this.willpower.max = 6;
        this.logic.max = 6;
        this.intuition.max = 6;
        this.charisma.max = 6;
    }

    setElfBaseValues(){
        this.edge.base = 1;
        this.body.base = 1;
        this.agility.base = 2;
        this.reaction.base = 1;
        this.strength.base = 1;
        this.willpower.base = 1;
        this.logic.base = 1;
        this.intuition.base = 1;
        this.charisma.base = 3;

        this.edge.max = 6;
        this.body.max = 6;
        this.agility.max = 7;
        this.reaction.max = 6;
        this.strength.max = 6;
        this.willpower.max = 6;
        this.logic.max = 6;
        this.intuition.max = 6;
        this.charisma.max = 8;
    }

    setOrcBaseValues(){
        this.edge.base = 1;
        this.body.base = 4;
        this.agility.base = 1;
        this.reaction.base = 1;
        this.strength.base = 3;
        this.willpower.base = 1;
        this.logic.base = 1;
        this.intuition.base = 1;
        this.charisma.base = 1;

        this.edge.max = 6;
        this.body.max = 9;
        this.agility.max = 6;
        this.reaction.max = 8;
        this.strength.max = 6;
        this.willpower.max = 6;
        this.logic.max = 5;
        this.intuition.max = 6;
        this.charisma.max = 5;
    }

    setDwarfBaseValues(){
        this.edge.base = 1;
        this.body.base = 3;
        this.agility.base = 1;
        this.reaction.base = 1;
        this.strength.base = 3;
        this.willpower.base = 2;
        this.logic.base = 1;
        this.intuition.base = 1;
        this.charisma.base = 1;

        this.edge.max = 6;
        this.body.max = 8;
        this.agility.max = 6;
        this.reaction.max = 5;
        this.strength.max = 8;
        this.willpower.max = 7;
        this.logic.max = 6;
        this.intuition.max = 6;
        this.charisma.max = 6;
    }

    setTrollBaseValues(){
        this.edge.base = 1;
        this.body.base = 5;
        this.agility.base = 1;
        this.reaction.base = 1;
        this.strength.base = 5;
        this.willpower.base = 1;
        this.logic.base = 1;
        this.intuition.base = 1;
        this.charisma.base = 1;

        this.edge.max = 6;
        this.body.max = 10;
        this.agility.max = 5;
        this.reaction.max = 6;
        this.strength.max = 10;
        this.willpower.max = 6;
        this.logic.max = 5;
        this.intuition.max = 5;
        this.charisma.max = 4;
    }

    get specialAttributes(): Attribute[] {
        return [this.edge, this.magic, this.resonance];
    }

    get physicalAttributes(): Attribute[] {
        return [this.body, this.agility, this.reaction, this.strength];
    }

    get mentalAttributes(): Attribute[] {
        return [this.willpower, this.logic, this.intuition, this.charisma];
    }

    get attribute_points(): number {
        return this._attribute_points;
    }

    recalculateSpecialAttributePoints() {
        console.log("Recalculate stub!")
    }

    recalculateAttributePoints() {
        this._attribute_points = 0;
        this.physicalAttributes.forEach(element => {
            this._attribute_points += element.skilled;
        });
        this.mentalAttributes.forEach(element => {
            this._attribute_points += element.skilled;
        });
    }
}