
export class UTILS {
  /**
   * MAPPER
   * */
  static mapper(value) {
    let code: number;
    for (let i in value) {
      if (typeof value[i] === "number") {
        code = value[i];
      }
    }
    return {
      id: code,
      text: value.name,
      value: code,
    };
  }
  static mapperPlayer(value) {    
    return {
      id: value.player_code,
      text: value.name,
      value: value.player_code,
      img: value.url_image,
      country_code: value.country_code,
      sport_code: value.sport_code
    };
  }

}
