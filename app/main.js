import {
  SeismicProvider
} from './providers/seismic-provider';
import {
  SeismicOption
} from './models/seismic-option';

console.log(SeismicProvider);

let option = new SeismicOption();
option.StartTm = '2016-04-01';
option.EndTm = '2016-04-31';

console.log(option);

let seismic = new SeismicProvider();
seismic.find(option);
