/** SeismicOption Class */
export class SeismicOption {
  constructor() {}

  toString() {
    return 'SeismicOption class';
  }

  /********************************
   * 기간 검색 용
   ********************************/
  /** startTm 'yyyy-mm-dd' */
  set StartTm(startTm) {
    this.startTm = startTm;
  }
  get StartTm() {
    return this.startTm;
  }

  /** endTm 'yyyy-mm-dd' */
  set EndTm(endTm) {
    this.endTm = endTm;
  }
  get EndTm() {
    return this.endTm;
  }

  /********************************
   * 규모 범위 검색 용
   ********************************/
  /** startSize */
  set StartSize(startSize) {
    this.startSize = startSize;
  }
  get StartSize() {
    return this.startSize;
  }

  /** endSize */
  set EndSize(endSize) {
    this.endSize = endSize;
  }
  get EndSize() {
    return this.endSize;
  }

  /********************************
   * 구간 검색 용
   ********************************/
  /** startLat */
  set StartLat(startLat) {
    this.startLat = startLat;
  }
  get StartLat() {
    return this.startLat;
  }

  /** endLat */
  set EndLat(endLat) {
    this.endLat = endLat;
  }
  get EndLat() {
    return this.endLat;
  }

  /** startLon */
  set StartLon(startLon) {
    this.startLon = startLon;
  }
  get StartLon() {
    return this.startLon;
  }

  /** endLon */
  set EndLon(endLon) {
    this.endLon = endLon;
  }
  get EndLon() {
    return this.endLon;
  }

  /********************************
   * 지점 기반 범위 검색 용
   ********************************/
  /** lon */
  set Lon(lon) {
    this.lon = lon;
  }
  get Lon() {
    return this.lon;
  }

  /** lat */
  set Lat(lat) {
    this.lat = lat;
  }
  get Lat() {
    return this.lat;
  }

  /** dist */
  set Dist(dist) {
    this.dist = dist;
  }
  get Dist() {
    return this.dist;
  }

  /********************************
   * 키워드 검색
   ********************************/
  /** keyword */
  set Keyword(keyword) {
    this.keyword = keyword;
  }
  get Keyword() {
    return this.keyword;
  }
}
