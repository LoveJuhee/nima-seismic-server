import {
  SeismicV1
} from './api/v1/seismic';
import {
  SeismicOption
} from './models/seismic-option';

console.log(SeismicV1);

let option = new SeismicOption();
option.StartTm = '2016-04-01';
option.EndTm = '2016-04-31';

console.log(option);

let seismic = new SeismicV1();
seismic.find(option);
