export default class ToDoLIst  {
     constructor(){
          this._list = [];
     }

     getList(){
          return this._list;
     }
     clearList(){
          this._list = []
     }

     addItemToList(itemObj){
          this._list.push(itemObj);
     }

     removeItemFromList(id){   // remove items from the list.
          const list = this._list
          for (let i = 0; i < list.length; i++) {
               if (list[i].id == id) {
                    list.splice(i,1);
                    break
               }               
          }
     }
}