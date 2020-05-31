'use strict';
class Hike {
  constructor(name, imgSrc, imgAlt, distance, difficulty, descrip, directions) {
    this.hikename = name;
    this.imgSrc = imgSrc;
    this.imgAlt = imgAlt;
    this.distance = distance;
    this.difficulty = difficulty;
    this.description = descrip;
    this.directions = directions;
  }
  get hikename() {
    return this._hikename;
  }
  
  get imgSrc() {
    return this._imgSrc;
  }

  set imgSrc(value) {
    this._imgSrc = value;
  }

  get imgAlt() {
    return this._imgAlt;
  }

  set imgAlt(value) {
    this._imgAlt = value;
  }

  get distance() {
    return this._distance;
  }

  set distance(value) {
    this._distance = value;
  }

  get difficulty() {
    return this._difficulty;
  }

  set difficulty(value) {
    this._difficulty = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get directions() {
    return this._directions;
  }

  set directions(value) {
    this._directions = value;
  }
}