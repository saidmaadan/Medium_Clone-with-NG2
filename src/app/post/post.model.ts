export class Post{
  title: string;
  source: string;
  thumbs: number;

  constructor(title: string, source: string, thumbs?: number){
    this.title = title;
    this.source = source;
    this.thumbs = thumbs || 0;
  }

  thumbUp(){
    this.thumbs += 1;
  }

  thumbDown(){
    this.thumbs -= 1;
  }

  domain(): string{
    try{
      const source: string = this.source.split('//')[1];
      return source.split('/')[0];
    } catch (err){
      return null;
    }
  }
}