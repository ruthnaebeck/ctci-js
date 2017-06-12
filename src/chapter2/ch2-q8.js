'use strict';

export function detectLoop(list){
  var nodes = [];
  var cNode = list;
  while(cNode){
    for(var i = 0; i < nodes.length; i++){
      if(cNode === nodes[i]){
        return cNode;
      }
    }
    nodes.push(cNode);
    cNode = cNode.next;
  }
  return null;
}
