import { Attribute } from './attribute';
import { Metatype } from './metatype';
import { MagicAbility } from './magic-ability';
import { MetatypePriority, AttributePriority } from './priority';


export class Character{
    private _metatype: Metatype;
    private _magic_ability: MagicAbility;
    private _attribute_points: number;
    private _special_attribute_points: number;

    // Priorities
    readonly metatype_priority: MetatypePriority;
    readonly attribute_priority: AttributePriority;

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
        this._special_attribute_points = 0;

        // Init priorities
        this.metatype_priority = new MetatypePriority();
        this.attribute_priority = new AttributePriority();

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
        switch (this._magic_ability) {
            case MagicAbility.Mundane:
                this.setMundaneBaseValues();
                break;
            case MagicAbility.Magician:
                this.setMagicianBaseValues();
                break;
            case MagicAbility.AspectedMagician:
                this.setAspectedMagicianBaseValues();
                break;
            case MagicAbility.Adept:
                this.setAdeptBaseValues();
                break;
            case MagicAbility.MysticAdept:
                this.setMysticAdeptBaseValues();
                break;
            case MagicAbility.Technomancer:
                this.setTechnomancerBaseValues();
                break;
        
            default:
                break;
        }
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

    setMundaneBaseValues(){
        this.magic.base = 0;
        this.magic.max = 0;
        this.resonance.base = 0;
        this.resonance.max = 0;
    }

    setMagicianBaseValues(){
        console.log("Set magic base values according to priority");
        this.resonance.base = 0;
        this.resonance.max = 0;
    }

    setAspectedMagicianBaseValues(){
        console.log("Set magic base values according to priority");
        this.resonance.base = 0;
        this.resonance.max = 0;
    }

    setAdeptBaseValues(){
        console.log("Set magic base values according to priority");
        this.resonance.base = 0;
        this.resonance.max = 0;
    }

    setMysticAdeptBaseValues(){
        console.log("Set magic base values according to priority");
        this.resonance.base = 0;
        this.resonance.max = 0;
    }

    setTechnomancerBaseValues(){
        console.log("Set resonance base values according to priority");
        this.magic.base = 0;
        this.magic.max = 0;
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

    get special_attribute_points(): number {
        return this._special_attribute_points;
    }

    recalculateSpecialAttributePoints() {
        this._special_attribute_points = 0;
        this.specialAttributes.forEach(element => {
            this._special_attribute_points += element.skilled;
        });
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