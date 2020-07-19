/** ToDo class definition
 * The class describes a task that needs to be completed
 * and if its status regarding completion
 */
 export class ToDo {
        constructor(description, uniqueId, status = false) {      
            this.Id = new Date(),
            this.Description = description,            
            this.UUID = uniqueId,
            this.Status = status

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

 
