const moment = require.requireActual("moment");

export default (timestamp = 0) => {
    return moment(timestamp);
}; // ne ajuta sa pstram acelasi moment in timp, sa nu se actualizeze data cu fiecare testare