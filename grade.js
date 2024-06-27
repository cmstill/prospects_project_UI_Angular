function gradeFunction(receiver) {
  let grade = 0; // Initialize grade variable

  // Check ytpa range
  if (receiver.ytpa > 2.5) {
    grade += 5;
  } else if (receiver.ytpa >= 2.2 && receiver.ytpa <= 2.49) {
    grade += 4;
  } else if (receiver.ytpa >= 1.7 && receiver.ytpa <= 1.99) {
    grade += 2;
  } else if (receiver.ytpa < 1.7) {
    grade += 0;
  }

  // Check targetShare range
  if (receiver.targetShare > 31.5) {
    grade += 3.5;
  } else if (receiver.targetShare >= 26 && receiver.targetShare <= 31.4) {
    grade += 3;
  } else if (receiver.targetShare >= 21 && receiver.targetShare <= 25.9) {
    grade += 2;
  } else if (receiver.targetShare < 20.9) {
    grade += 0;
  }

  // Check boy
  if (receiver.boy === 1) {
    grade += 4.5;
  } else if (receiver.boy === 2) {
    grade += 4;
  } else {
    grade += 0;
  }

  // Check dom range
  if (receiver.dom >= 40) {
    grade += 4;
  } else if (receiver.dom >= 31 && receiver.dom <= 39.9) {
    grade += 3;
  } else if (receiver.dom >= 25.5 && receiver.dom <= 30.9) {
    grade += 1;
  } else if (receiver.dom < 25.5) {
    grade += 0;
  }

  // Check capital range
  if (receiver.capital <= 32) {
    grade += 7;
  } else if (receiver.capital >= 33 && receiver.capital <= 64) {
    grade += 6;
  } else if (receiver.capital >= 65 && receiver.capital <= 96) {
    grade += 3.5;
  } else {
    grade += 0;
  }

  // Check film range
  if (receiver.film >= 6.7) {
    grade += 6;
  } else if (receiver.film >= 6.4 && receiver.film <= 6.6) {
    grade += 5;
  } else if (receiver.film >= 6.2 && receiver.film <= 6.39) {
    grade += 3;
  } else if (receiver.film < 6.2) {
    grade += 0;
  }

  // Check declare
  if (receiver.declare === 3) {
    grade += 3;
  } else if (receiver.declare > 4) {
    grade += 0;
  }

  // Check rivals
  if (receiver.rivals === 5) {
    grade += 1;
  } else if (receiver.rivals === 4) {
    grade += 0.5;
  } else {
    grade += 0;
  }

  // Check height range
  if (receiver.height >= 6000) {
    grade += 2;
  } else if (receiver.height >= 5119 && receiver.height <= 5100) {
    grade += 1;
  } else if (receiver.height < 5100) {
    grade += 0;
  }

  // Check weight
  if (receiver.weight > 184) {
    grade += 0.5;
  } else {
    grade += 0;
  }

  // Check ras range
  if (receiver.ras >= 95) {
    grade += 3;
  } else if (receiver.ras >= 85 && receiver.ras <= 94) {
    grade += 2;
  } else if (receiver.ras >= 70 && receiver.ras <= 84) {
    grade += 1;
  } else if (receiver.ras < 70) {
    grade += 0;
  }

  // Check conference
  const conference = receiver.conference ? receiver.conference.toLowerCase() : '';
  
  if (conference === 'sec') {
    grade += 2;
  } else if (conference === 'pac10' || conference === 'acc' || conference === 'big12' || conference === 'big10') {
    grade += 1;
  } else {
    grade += 0;
  }

  // Calculate average grade (divide by 10) and print to console
  const averageGrade = grade / 10;
	return averageGrade
  console.log(`Average Grade: ${averageGrade}`);
}


let receiver = {
  ytpa: 3.19,
  targetShare: 29.8,
  boy: 2,
  dom: 44,
  capital: 4,
  film: 6.83,
  declare: 3,
  rivals: 4,
  height: 6030,
  weight: 209,
  ras: 90,
  conference: 'BIG10'
};

gradeFunction(receiver);

