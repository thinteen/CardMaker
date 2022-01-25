import {
  HistoryChanges,
  Templates,
  ArtObject,
  UrlImgObject,
  ArtObj,
  ImgObject,
  TextObject,
  Background,
  Filter,
  Canvas,
  Card
} from "./CardMakerTypes"

const TestTemplates: Templates = {
  name: '',
  json: '',
}

const TestArtObj: ArtObj = {
  type: 'artObj',
  src: ArtObject.papper,
  id: 2,
  width: 50,
  height: 50,
  positionX: 50,
  positionY: 50,
}

const TestChapterImg: ImgObject = {
  src: UrlImgObject.forest,
  id: 0,
  width: 353,
  height: 529.5,
  type: 'img',
  positionX: 200,
  positionY: 100,
}

const TestChapterText: TextObject = {
  text: 'Hello world!',
  size: 32,
  bold: true,
  italic: true,
  underline: false,
  fontFamily: 'Helvetica Neue',
  color: 'black',
  type: 'text',
  id: 0,
  positionX: 500,
  positionY: 0,
}

const TestBackground: Background = {
  color: '#fff',
  src: null,
}

const TestFilter: Filter = {
  color: '#000',
  transparency: 0.0,
}

const TestCanvas: Canvas = {
  width: 800,
  height: 700,
  filter: TestFilter,
  listItems: [
    TestChapterText,
    TestChapterImg,
    TestArtObj
  ],
  background: TestBackground,
}

const TestHistoryChanges: HistoryChanges = {
  listState: [TestCanvas],
  currentIndex: 1,
}

export const TestCard: Card = {
  canvas: TestCanvas,
  history: TestHistoryChanges,
  templates: [TestTemplates],
  selectItems: 2,
}