import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 37;


  public get capitalizedName() : string {
    return this.name.toUpperCase()
  }


  public getHeroDescription() : string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void{
    this.name = 'superman'
  }

  changeAge():void{
    this.age = 50
  }

  resetBtn():void{
    this.name = 'ironman';
    this.age = 45;
  }

}
