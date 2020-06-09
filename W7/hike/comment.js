export class Comment {
  constructor(hikeId, content, type='hike') {
      this._commentId = Date.now(),
      this._content = content,
      this._hikeId = hikeId,
      this._createdDate = new Date(),
      this._type = type
  }
}