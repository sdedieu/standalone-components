import { Injectable } from '@angular/core';
import { concatMap, delay, filter, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private readonly mockCities: City[] = [
    {
      name: 'Paris',
      country: 'France',
      description: 'Paris est la capitale de la France. Divisée en vingt arrondissements, elle est le chef-lieu de la région Île-de-France et le siège de la métropole du Grand Paris.',
      image: 'assets/images/paris.jpg',
      avatar: 'assets/images/avatars/paris.png'
    },
    {
      name: 'Rome',
      country: 'Italy',
      description: "Rome est la capitale de l'Italie. Située au centre-ouest de la péninsule italienne, près de la mer Tyrrhénienne, elle est également la capitale de la région du Latium.",
      image: 'assets/images/roma.jpg',
      avatar: 'assets/images/avatars/roma.png'
    },
    {
      name: 'Madrid',
      country: 'Spain',
      description: "Madrid est la capitale et la plus grande ville d'Espagne. Située dans la partie centrale du royaume, elle est également la capitale et la ville la plus peuplée de la Communauté de Madrid.",
      image: 'assets/images/madrid.jpg',
      avatar: 'assets/images/avatars/madrid.png'
    },
    {
      name: 'Barcelona',
      country: 'Spain',
      description: 'Barcelona est la capitale administrative et économique de la Catalogne, de la province de Barcelone, de la comarque du Barcelonès ainsi que de son aire et de sa région métropolitaines, en Espagne.',
      image: 'assets/images/barcelona.jpg',
      avatar: 'assets/images/avatars/barcelona.png'
    },
    {
      name: 'London',
      country: 'United Kingdom',
      description: "Londres est la capitale et plus grande ville d'Angleterre et du Royaume-Uni. La ville est située près de l'estuaire de la Tamise dans le sud-est de l'Angleterre.",
      image: 'assets/images/london.jpg',
      avatar: 'assets/images/avatars/london.png'
    },
    {
      name: 'Istanbul',
      country: 'Turkey',
      description: "Istanbul, appelé officiellement ainsi à partir de 1930 et historiquement Byzance et Constantinople, est la plus grande ville et métropole de Turquie et la préfecture de la province homonyme, dont elle représente environ 50 % de la superficie mais plus de 97 % de la population.",
      image: 'assets/images/istanbul.jpg',
      avatar: 'assets/images/avatars/istanbul.png'
    },
    {
      name: 'Berlin',
      country: 'Germany',
      description: "Berlin est la capitale4 et la plus grande ville d'Allemagne. Institutionnellement, c’est une ville-État nommée Land de Berlin.",
      image: 'assets/images/berlin.jpg',
      avatar: 'assets/images/avatars/berlin.png'
    },
    {
      name: 'Prague',
      country: 'Czech Republic',
      description: "Prague est la capitale et la plus grande ville de la Tchéquie, en Bohême. Située au cœur de l'Europe centrale, à l'ouest du pays, la ville est édifiée sur les rives de la Vltava.",
      image: 'assets/images/prague.jpg',
      avatar: 'assets/images/avatars/prague.png'
    },
    {
      name: 'Dublin',
      country: 'Ireland',
      description: "Dublin est la plus grande ville de l'île d'Irlande et de l'État d'Irlande, dont elle est la capitale (Belfast étant la capitale de l'Irlande du Nord).",
      image: 'assets/images/dublin.jpg',
      avatar: 'assets/images/avatars/dublin.png'
    },
    {
      name: 'Reykjavik',
      country: 'Iceland',
      description: "Reykjavik est la capitale de l'Islande. Elle se situe à environ 250 km au sud du cercle polaire arctique, ce qui en fait la capitale la plus septentrionale d'un État souverain (la capitale du Groenland, Nuuk, étant située quelques kilomètres plus au nord).",
      image: 'assets/images/reykjavik.jpg',
      avatar: 'assets/images/avatars/reykjavik.png'
    },
    {
      name: 'Stockholm',
      country: 'Sweden',
      description: "Stockholm est la plus grande ville et la capitale de la Suède. Elle est le siège du Gouvernement et du Parlement, ainsi que le lieu de résidence officielle du monarque suédois.",
      image: 'assets/images/stockholm.jpg',
      avatar: 'assets/images/avatars/stockholm.png'
    },
    {
      name: 'Vienna',
      country: 'Austria',
      description: "Vienne est la capitale et la plus grande ville de l'Autriche ; elle est aussi l'un des neuf Länder (État fédéré) du pays.",
      image: 'assets/images/vienna.jpg',
      avatar: 'assets/images/avatars/vienna.png'
    },
    {
      name: 'Zurich',
      country: 'Switzerland',
      description: "Zurich est une cité alémanique de Suisse, capitale du canton de Zurich.",
      image: 'assets/images/zurich.jpg',
      avatar: 'assets/images/avatars/zurich.png'
    },
    {
      name: 'Brussels',
      country: 'Belgium',
      description: "Brussels est la capitale administrative et la plus grande ville de la Belgique. Située dans le département de Flandre-Occidentale, elle est également la capitale de la région de Bruxelles-Capitale.",
      image: 'assets/images/brussels.jpg',
      avatar: 'assets/images/avatars/brussels.png'
    }
  ]

  constructor() { }

  find(search: string, urgent: boolean): Observable<City[]> {

    return of(this.mockCities).pipe(
      delay(1000),
      map(cities => {
        console.log('search: ' + search, cities);
        if (urgent) {
          throw new Error(`Everything that's urgent causes errors`);
       } else {
          return cities
          .filter(city => city.name.toLowerCase().includes(search.toLowerCase())
            || city.country.toLowerCase().includes(search.toLowerCase())
          )
        }
      })
    );
  }
}
