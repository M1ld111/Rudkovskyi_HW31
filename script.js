const seats = {
    '2023-02-17': {
      '09:00': {
        dimension: '2D',
        foodAlowed: true,
        seatsAvailable: 11,
        seatNum: {
            a: [1, 2, 3],
            b: [4, 5, 6],
            c: [1, 2, 3, 4, 5]
        }
      },
      '12:00': {
        dimension: '3D',
        foodAlowed: false,
        seatsAvailable: 11,
        seatNum: {
            a: [1, 2, 3],
            b: [4, 5, 6],
            c: [1, 2, 3, 4, 5]
        }
      },
      '15:00': {
        dimension: '2D',
        foodAlowed: true,
        seatsAvailable: 11,
        seatNum: {
            a: [1, 2, 3],
            b: [4, 5, 6],
            c: [1, 2, 3, 4, 5]
        }
      },
    },
    '2023-02-18': {
      '09:00': {
        dimension: '3D',
        foodAlowed: true,
        seatsAvailable: 11,
        seatNum: {
            a: [1, 2, 3],
            b: [4, 5, 6],
            c: [1, 2, 3, 4, 5]
        }
      },
      '12:00': {
        dimension: '2D',
        foodAlowed: false,
        seatsAvailable: 11,
        seatNum: {
            a: [1, 2, 3],
            b: [4, 5, 6],
            c: [1, 2, 3, 4, 5]
        }
      },
      '15:00': {
        dimension: '2D',
        foodAlowed: false,
        seatsAvailable: 11,
        seatNum: {
            a: [1, 2, 3],
            b: [4, 5, 6],
            c: [1, 2, 3, 4, 5]
        }
      },
    },
    '2023-02-19': {
      '09:00': {
        dimension: '2D',
        foodAlowed: true,
        seatsAvailable: 11,
        seatNum: {
            a: [1, 2, 3],
            b: [4, 5, 6],
            c: [1, 2, 3, 4, 5]
        }
      },
      '12:00': {
        dimension: '2D',
        foodAlowed: false,
        seatsAvailable: 11,
        seatNum: {
            a: [1, 2, 3],
            b: [4, 5, 6],
            c: [1, 2, 3, 4, 5]
        }
      },
      '15:00': {
        dimension: '3D',
        foodAlowed: true,
        seatsAvailable: 0,
        seatNum: {
            a: [],
            b: [],
            c: []
        }
      },
    },
  }
  
  function checkTicketsAvailable(date, time, dim, food, row, seat) {
    return new Promise((resolve, reject)=> {
      setTimeout(() => {
        const dateTime = seats[date][time]
        if (dateTime.seatsAvailable === 0) {
          reject(`?????????????? ?????????? ???? ${date} ?? ${time} ??????????`)
        } else if (dateTime === undefined) {
          reject(`?????????????? ???? ${date} ?? ${time} ??????????`)
        } else if (dateTime.dimension !== dim) {
          reject(`${date} ???? ${time} ?????????????? ${dim} ??????????`)
        } else if (dateTime.foodAlowed === false && food === true) {
          reject(`???? ?????? ?????????? ?? ???????? ???? ??????????`)
        } else if (dateTime.seatNum[row] === undefined) {
          reject(`???????????? ?????? ?????? ?????? ????????????????`)
        } else if (dateTime.seatNum[row].indexOf(seat) === -1) {
          reject(`???????????? ???? ?????????? ?????? ??????????????`)
        } else {
          resolve(dateTime);
        }
      }, 1000);
    })
  }
  
  
  async function bookTickets(date, time, dimension, food, row, seat){
    try{
      const availableSeats = await checkTicketsAvailable(date, time, dimension, food, row, seat);
      console.log(`${date}, ${time}, ${dimension}, ?????? ${row}, ?????????? ${seat}`);
    } catch (error) {
      console.error(error);
    }
  }

  bookTickets('2023-02-17', '15:00', '2D', true, 'a', 3);
  // bookTickets('2023-02-17', '15:00', '3D', true, 'a', 3);
  // bookTickets('2023-02-17', '12:00', '3D', true, 'a', 6);
  // bookTickets('2023-02-17', '15:00', '2D', true, 'a', 7);
  // bookTickets('2023-02-17', '15:00', '2D', true, 'b', 1);
  // bookTickets('2023-02-19', '15:00', '2D', true, 'a', 3)



  //?????????????????? ?????? ?? ??????????????

