import { Pipe, PipeTransform } from '@angular/core';
import marked from 'marked';

@Pipe({ name: 'compileMarkdown' })
export class CompiledPipe implements PipeTransform {
  constructor() {}

  transform(value: any, args?: any): any {
    return marked(value);
  }
}
