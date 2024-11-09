let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {

  const sum = (...numbers) => {
    return numbers.reduce((sum, currentValue) => {
      return sum + currentValue
    })
  }
  const average = (...numbers) => sum(...numbers) / numbers.length;


  const exerciseTotalScore = (...exerciseScores) => sum(...exerciseScores)

  const GRADING_WEIGHT = {exam: .65, exercises: .35}
  const weightedExamScore = (examScoreOutOf100) =>  examScoreOutOf100 * GRADING_WEIGHT.exam;
  const weightedExerciseScore = (exerciseScoreOutOf100) =>  exerciseScoreOutOf100 * GRADING_WEIGHT.exercises;

  const weightedPercentageRounded = (weightedExamScore, weightedExerciseScore) => {
    return Math.round(weightedExamScore + weightedExerciseScore);
  }

  const calculateLetterGrade = (numberGrade) => {
    switch(true){
      case numberGrade >=93: return 'A';
      case numberGrade >=85: return 'B';
      case numberGrade >=77: return 'C';
      case numberGrade >=69: return 'D';
      case numberGrade >=60: return 'E';
      case numberGrade >=0: return 'F';
    }
  }

  const numberedExamScores = {}
  const addExamFactoids = (examScores) => {
    examScores.forEach((score, idx) => {
      const testNumber = idx + 1;
      numberedExamScores[testNumber] ??= []
      numberedExamScores[testNumber].push(score)
    });
  }

  const studentGrades = []

  Object.values(scores).forEach((studentObj) =>{
    const weightedExam = weightedExamScore(average(...studentObj.scores.exams))
    const weightedExercise = weightedExerciseScore(exerciseTotalScore(...studentObj.scores.exercises))
    const weightedPercentage = weightedPercentageRounded(weightedExam, weightedExercise)
    const letterGrade = calculateLetterGrade(weightedPercentage);

    studentGrades.push(`${weightedPercentage} (${letterGrade})`)
    addExamFactoids(studentObj.scores.exams)

  })

  const examFactoids = Object.values(numberedExamScores).map((examScores) => {
    return examFactoidObj = {
      'average': average(...examScores),
      'minimum': Math.min(...examScores),
      'maximum': Math.max(...examScores),
    }
  })

  return {
    'studentGrades': studentGrades,
    'exams': examFactoids
  }
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }