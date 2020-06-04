/** ToDo class definition
 * The class describes a task that needs to be completed
 * and if its status regarding completion
 */
 export class ToDo {
        constructor(description, status = false) {      
            this.Id = Date.now(),
            this.Description = description, 
            this.Status = status,
            this.Created = new Date()
    }

    // get Id() {
    //   return this.Id;
    // }

    // set Id() {
    //   this.Id = Date.now();
    // }

    // get description() {
    //   return this.Description;
    // }

    // set description(newDescription) {
    //   this.Description = newDescription;
    // }

    // get status() {
    //   return this.status;
    // }

    // set status(newStatus) {
    //   this.Status = newStatus;
    // }
 }

 
