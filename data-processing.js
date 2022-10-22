// 예제에서는 한 곳에 같이 작성되었지만, 파일의 구조를 나누었다는 가정이 필요하다.
// MenuData라는 생성자함수(constructor function)는 특정 위치에 캡슐화가 끝난 상태이다.
class MenuData {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
// setMenuInit 객체 리터럴을 임시로 사용하기 위한 데이터로, 필요성이나 재사용성을 고려하여 모듈에서부터 불러올 수 있다.
const setMenuInit = {
  needCount : 10,
  tagName : "",
  makeArray : [],
}
// getFromJson 배열은 특정 JSON 파일에서 import 한 것으로 가정한다.
let getFromJson = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란", "피존투", "또가스", "야도킹", "고오스"];
console.log(getFromJson.length);

for(let i = 0; i < setMenuInit.needCount; i++){
  let tempObject = new MenuData(i+1, getFromJson[i]);
  // new MenuData, 인스턴스를 loop에 의해 생성되어 특정 객체의 배열 원소로 추가된다.
  // 여기서 Object.freeze()라는 특수한 메서드를 확인할 필요성 확인, 불변성(immutable)
  setMenuInit.makeArray.push(Object.freeze(tempObject));
}
console.log(setMenuInit.makeArray)