import {Injectable} from '@angular/core';

@Injectable()
export class Trie {
  tree: any = {};

  constructor() {
  }

  add(input) {
    let currentNode = this.tree;

    let nextNode = null;

    let currentCharacter = input.slice(0, 1);
    input = input.slice(1);

    while (currentNode[currentCharacter] && currentCharacter) {
      currentNode = currentNode[currentCharacter];

      currentNode.remainder.push(input);

      currentCharacter = input.slice(0, 1);
      input = input.slice(1);
    }

    while (currentCharacter) {
      nextNode = {
        remainder: [input]
      };

      currentNode[currentCharacter] = nextNode;
      // Hold reference for next loop
      currentNode = nextNode;

      // Next iteration
      currentCharacter = input.slice(0, 1);
      input = input.slice(1);
    }

  }

  search(input) {
    let currentNode = this.tree;
    let currentCharacter = input.slice(0, 1);
    input = input.slice(1);

    while (currentNode[currentCharacter] && currentCharacter) {
      currentNode = currentNode[currentCharacter];
      currentCharacter = input.slice(0, 1);
      input = input.slice(1);
    }

    if (currentCharacter && !currentNode[currentCharacter]) {
      return {
        remainder: []
      };
    }

    return currentNode;
  }
}
