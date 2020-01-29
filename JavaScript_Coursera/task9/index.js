module.exports = {

    subs: {},

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (subscriber === undefined) {
            return this
          }
          
          if (!this.subs.hasOwnProperty(event)) {
              this.subs[event] = []
          }
          
          this.subs[event].push([
            subscriber, handler
          ])

          
          return this
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {

        if (this.subs[event] === undefined && subscriber === undefined) {
            return this
        }

        if (this.subs.hasOwnProperty(event)) {
            var currSubs = this.subs[event]

            for (var i = currSubs.length - 1; i >= 0; i--) {
                if (currSubs[i][0] === subscriber) {
                    currSubs.splice(i, 1)
                }
            }
        }

        return this
    }, 

    /**
     * @param {String} event
     */
    emit: function (event) { 

        if (this.subs.hasOwnProperty(event)) {
            var currSubs = this.subs[event]

            for (var i = 0; i < currSubs.length; i++){
                currSubs[i][1].call(currSubs[i][0]);
            }
    
            return this   
        }

        return this
    }
};
