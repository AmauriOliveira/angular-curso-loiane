import { Pipe } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false, // por default ele é true e o valor pode ser o,imitido
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
