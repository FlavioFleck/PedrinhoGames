// import { Pipe, PipeTransform } from '@angular/core';
// import { Game } from '../services/product.service';

// @Pipe({
//     name: 'gameFilter',
//     standalone: true
// })

// export class GameFilterPipe implements PipeTransform {
//     transform(games: Game[], searchTerm: string): Game[] {
    
//         if (!searchTerm) return games;
//         const lowerSearch = searchTerm.toLowerCase();

//         return games.filter(game => 
//             game.title.toLowerCase().includes(lowerSearch) ||
//             game.platform.toLowerCase().includes(lowerSearch)
//         );
//     }
// }