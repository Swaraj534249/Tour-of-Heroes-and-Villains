import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { subscribeOn } from 'rxjs';
import { Hero } from 'src/app/hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html',
  styleUrls: ['./all-heroes.component.scss']
})
export class AllHeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
    private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  // selectedHero?: Hero;
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}, name=${hero.name}`);
  //   // console.log(hero);
  //   // console.log(this.messageService);
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
        // console.log(this.heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
