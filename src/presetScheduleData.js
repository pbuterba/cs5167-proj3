import { getDateOfWeek } from "./lib/date-utilities";

export const presetScheduleData = {
    
    fall_2023: {
        courses: [
            {
                id: '1',
                start: getDateOfWeek(1, 8, 30),
                end: getDateOfWeek(1, 9, 50),
                backgroundColor: "#FF6B6B",
                extendedProps: {
                    course: 'CS 220',
                    courseName: 'Data Structures',
                    location: 'Computer Science Lab 101',
                    instructor: 'Dr. Lisa Monroe',
                    grade: 'B'
                }
            },
            {
                id: '2',
                start: getDateOfWeek(4, 8, 30),
                end: getDateOfWeek(4, 9, 50),
                backgroundColor: "#FF6B6B",
                extendedProps: {
                    course: 'CS 220',
                    courseName: 'Data Structures',
                    location: 'Computer Science Lab 101',
                    instructor: 'Dr. Lisa Monroe',
                    grade: 'B'
                }
            },
            {
                id: '3',
                start: getDateOfWeek(2, 10, 0),
                end: getDateOfWeek(2, 11, 0),
                backgroundColor: "#6A89CC",
                extendedProps: {
                    course: 'PSY 101',
                    courseName: 'Introduction to Psychology',
                    location: 'Psychology Hall 204',
                    instructor: 'Prof. William Tate',
                    grade: 'C'
                }
            },
            {
                id: '4',
                start: getDateOfWeek(5, 10, 0),
                end: getDateOfWeek(5, 11, 0),
                backgroundColor: "#6A89CC",
                extendedProps: {
                    course: 'PSY 101',
                    courseName: 'Introduction to Psychology',
                    location: 'Psychology Hall 204',
                    instructor: 'Prof. William Tate',
                    grade: 'C'
                }
            },
            {
                id: '5',
                start: getDateOfWeek(1, 11, 30),
                end: getDateOfWeek(1, 12, 45),
                backgroundColor: "#F6B93B",
                extendedProps: {
                    course: 'HIST 101',
                    courseName: 'Ancient Civilizations',
                    location: 'History Building 303',
                    instructor: 'Dr. Alicia Chen',
                    grade: 'A'
                }
            },
            {
                id: '6',
                start: getDateOfWeek(3, 11, 30),
                end: getDateOfWeek(3, 12, 45),
                backgroundColor: "#F6B93B",
                extendedProps: {
                    course: 'HIST 101',
                    courseName: 'Ancient Civilizations',
                    location: 'History Building 303',
                    instructor: 'Dr. Alicia Chen',
                    grade: 'A'
                }
            },
            {
                id: '7',
                start: getDateOfWeek(2, 12, 15),
                end: getDateOfWeek(2, 13, 30),
                backgroundColor: "#38ADA9",
                extendedProps: {
                    course: 'BIO 101',
                    courseName: 'Biology I',
                    location: 'Science Hall 201',
                    instructor: 'Dr. Rachel Martin',
                    grade: 'A-'
                }
            },
            {
                id: '8',
                start: getDateOfWeek(5, 12, 15),
                end: getDateOfWeek(5, 13, 30),
                backgroundColor: "#38ADA9",
                extendedProps: {
                    course: 'BIO 101',
                    courseName: 'Biology I',
                    location: 'Science Hall 201',
                    instructor: 'Dr. Rachel Martin',
                    grade: 'A-'
                }
            },
            {
                id: '9',
                start: getDateOfWeek(1, 14, 0),
                end: getDateOfWeek(1, 15, 0),
                backgroundColor: "#E66767",
                extendedProps: {
                    course: 'ENG 210',
                    courseName: 'Shakespearean Studies',
                    location: 'English Hall 102',
                    instructor: 'Prof. Samuel Green',
                    grade: 'B+'
                }
            },
            {
                id: '10',
                start: getDateOfWeek(4, 14, 0),
                end: getDateOfWeek(4, 15, 0),
                backgroundColor: "#E66767",
                extendedProps: {
                    course: 'ENG 210',
                    courseName: 'Shakespearean Studies',
                    location: 'English Hall 102',
                    instructor: 'Prof. Samuel Green',
                    grade: 'B+'
                }
            },
            {
                id: '11',
                start: getDateOfWeek(2, 15, 15),
                end: getDateOfWeek(2, 16, 30),
                backgroundColor: "#60A3BC",
                extendedProps: {
                    course: 'PHYS 2001',
                    courseName: 'Physics I',
                    location: 'Physics Lab 305',
                    instructor: 'Dr. Josephine Clark',
                    grade: 'B'
                }
            },
            {
                id: '12',
                start: getDateOfWeek(4, 15, 15),
                end: getDateOfWeek(4, 16, 30),
                backgroundColor: "#60A3BC",
                extendedProps: {
                    course: 'PHYS 2001',
                    courseName: 'Physics I',
                    location: 'Physics Lab 305',
                    instructor: 'Dr. Josephine Clark',
                    grade: 'B'
                }
            }
        ]
    },
    spring_2024: {
        courses: [
            {
                id: '1',
                start: getDateOfWeek(1, 8, 30),
                end: getDateOfWeek(1, 9, 25),
                backgroundColor: "#A1C45A",
                extendedProps: {
                    course: 'ENED 1100',
                    courseName: 'Introduction to Engineering',
                    location: 'Baldwin 860D',
                    instructor: 'Preston Buterbaugh',
                    grade: 'A'
                }
            },
            {
                id: '2',
                start: getDateOfWeek(3, 8, 30),
                end: getDateOfWeek(3, 9, 25),
                backgroundColor: "#A1C45A",
                extendedProps: {
                    course: 'ENED 1100',
                    courseName: 'Introduction to Engineering',
                    location: 'Baldwin 860D',
                    instructor: 'Preston Buterbaugh',
                    grade: 'A'
                }
            },
            {
                id: '5',
                start: getDateOfWeek(1, 13, 15),
                end: getDateOfWeek(1, 14, 40),
                backgroundColor: "#89CFF0",
                extendedProps: {
                    course: 'BIO 102',
                    courseName: 'Biology II',
                    location: 'Life Sciences 150',
                    instructor: 'Dr. Anna Rivera',
                    grade: 'A-'
                }
            },
            {
                id: '6',
                start: getDateOfWeek(3, 13, 15),
                end: getDateOfWeek(3, 14, 40),
                backgroundColor: "#89CFF0",
                extendedProps: {
                    course: 'BIO 102',
                    courseName: 'Biology II',
                    location: 'Life Sciences 150',
                    instructor: 'Dr. Anna Rivera',
                    grade: 'A-'
                }
            },
            {
                id: '7',
                start: getDateOfWeek(2, 9, 30),
                end: getDateOfWeek(2, 10, 25),
                backgroundColor: "#F5B041",
                extendedProps: {
                    course: 'HIST 2120',
                    courseName: 'World History',
                    location: 'History Building 302',
                    instructor: 'Dr. Raymond King',
                    grade: 'A'
                }
            },
            {
                id: '8',
                start: getDateOfWeek(4, 9, 30),
                end: getDateOfWeek(4, 10, 25),
                backgroundColor: "#F5B041",
                extendedProps: {
                    course: 'HIST 2120',
                    courseName: 'World History',
                    location: 'History Building 302',
                    instructor: 'Dr. Raymond King',
                    grade: 'A'
                }
            },
            {
                id: '13',
                start: getDateOfWeek(1, 12, 0),
                end: getDateOfWeek(1, 13, 0),
                backgroundColor: "#E59866",
                extendedProps: {
                    course: 'MATH 1500',
                    courseName: 'Linear Algebra',
                    location: 'Math Building 202',
                    instructor: 'Dr. Erin McDonald',
                    grade: 'B-'
                }
            },
            {
                id: '14',
                start: getDateOfWeek(3, 12, 0),
                end: getDateOfWeek(3, 13, 0),
                backgroundColor: "#E59866",
                extendedProps: {
                    course: 'MATH 1500',
                    courseName: 'Linear Algebra',
                    location: 'Math Building 202',
                    instructor: 'Dr. Erin McDonald',
                    grade: 'B-'
                }
            },
            {
                id: '15',
                start: getDateOfWeek(2, 14, 0),
                end: getDateOfWeek(2, 15, 15),
                backgroundColor: "#FFB347",
                extendedProps: {
                    course: 'ARTS 2100',
                    courseName: 'Art Appreciation',
                    location: 'Fine Arts 303',
                    instructor: 'Prof. Lillian Barnes',
                    grade: 'A'
                }
            },
            {
                id: '16',
                start: getDateOfWeek(4, 14, 0),
                end: getDateOfWeek(4, 15, 15),
                backgroundColor: "#FFB347",
                extendedProps: {
                    course: 'ARTS 2100',
                    courseName: 'Art Appreciation',
                    location: 'Fine Arts 303',
                    instructor: 'Prof. Lillian Barnes',
                    grade: 'A'
                }
            }
        ]
    },
    summer_2024: {
        courses: [
            {
                id: '1',
                start: getDateOfWeek(1, 9, 0),
                end: getDateOfWeek(1, 10, 15),
                backgroundColor: "#8E44AD",
                extendedProps: {
                    course: 'ENG 101',
                    courseName: 'English Literature',
                    location: 'Humanities Hall 202',
                    instructor: 'Dr. Sarah Williams',
                    grade: 'A'
                }
            },
            {
                id: '2',
                start: getDateOfWeek(5, 9, 0),
                end: getDateOfWeek(5, 10, 15),
                backgroundColor: "#8E44AD",
                extendedProps: {
                    course: 'ENG 101',
                    courseName: 'English Literature',
                    location: 'Humanities Hall 202',
                    instructor: 'Dr. Sarah Williams',
                    grade: 'A'
                }
            },
            {
                id: '3',
                start: getDateOfWeek(2, 10, 30),
                end: getDateOfWeek(2, 11, 45),
                backgroundColor: "#3498DB",
                extendedProps: {
                    course: 'BIO 101',
                    courseName: 'Biology Basics',
                    location: 'Life Sciences 101',
                    instructor: 'Dr. Jason Kim',
                    grade: 'B+'
                }
            },
            {
                id: '4',
                start: getDateOfWeek(4, 10, 30),
                end: getDateOfWeek(4, 11, 45),
                backgroundColor: "#3498DB",
                extendedProps: {
                    course: 'BIO 101',
                    courseName: 'Biology Basics',
                    location: 'Life Sciences 101',
                    instructor: 'Dr. Jason Kim',
                    grade: 'B+'
                }
            },
            {
                id: '5',
                start: getDateOfWeek(3, 11, 0),
                end: getDateOfWeek(3, 12, 0),
                backgroundColor: "#E74C3C",
                extendedProps: {
                    course: 'HIST 210',
                    courseName: 'World History',
                    location: 'History Building 305',
                    instructor: 'Prof. Linda Chan',
                    grade: 'A'
                }
            },
            {
                id: '6',
                start: getDateOfWeek(5, 11, 0),
                end: getDateOfWeek(5, 12, 0),
                backgroundColor: "#E74C3C",
                extendedProps: {
                    course: 'HIST 210',
                    courseName: 'World History',
                    location: 'History Building 305',
                    instructor: 'Prof. Linda Chan',
                    grade: 'A'
                }
            },
            {
                id: '7',
                start: getDateOfWeek(2, 13, 0),
                end: getDateOfWeek(2, 14, 15),
                backgroundColor: "#27AE60",
                extendedProps: {
                    course: 'CHEM 120',
                    courseName: 'Chemistry I',
                    location: 'Science Center 210',
                    instructor: 'Dr. Emily Martin',
                    grade: 'A'
                }
            },
            {
                id: '8',
                start: getDateOfWeek(4, 13, 0),
                end: getDateOfWeek(4, 14, 15),
                backgroundColor: "#27AE60",
                extendedProps: {
                    course: 'CHEM 120',
                    courseName: 'Chemistry I',
                    location: 'Science Center 210',
                    instructor: 'Dr. Emily Martin',
                    grade: 'A'
                }
            },
            {
                id: '9',
                start: getDateOfWeek(1, 14, 30),
                end: getDateOfWeek(1, 15, 45),
                backgroundColor: "#F39C12",
                extendedProps: {
                    course: 'MATH 110',
                    courseName: 'Algebra I',
                    location: 'Math Building 102',
                    instructor: 'Prof. Karen Young',
                    grade: 'A'
                }
            },
            {
                id: '10',
                start: getDateOfWeek(5, 14, 30),
                end: getDateOfWeek(5, 15, 45),
                backgroundColor: "#F39C12",
                extendedProps: {
                    course: 'MATH 110',
                    courseName: 'Algebra I',
                    location: 'Math Building 102',
                    instructor: 'Prof. Karen Young',
                    grade: 'A'
                }
            },
            {
                id: '11',
                start: getDateOfWeek(2, 15, 0),
                end: getDateOfWeek(2, 16, 15),
                backgroundColor: "#2980B9",
                extendedProps: {
                    course: 'PHYS 2001',
                    courseName: 'Physics I',
                    location: 'Physics Hall 110',
                    instructor: 'Dr. Nathan Harper',
                    grade: 'C+'
                }
            },
            {
                id: '12',
                start: getDateOfWeek(4, 15, 0),
                end: getDateOfWeek(4, 16, 15),
                backgroundColor: "#2980B9",
                extendedProps: {
                    course: 'PHYS 140',
                    courseName: 'Physics I',
                    location: 'Physics Hall 110',
                    instructor: 'Dr. Nathan Harper',
                    grade: 'C+'
                }
            }
        ]
    },
    fall_2024: {
        courses: [
            {
                id: '1',
                start: getDateOfWeek(1, 9, 0),
                end: getDateOfWeek(1, 9, 55),
                backgroundColor: "#FF5C4D",
                extendedProps: {
                    course: 'MATH 1061',
                    courseName: 'Calculus I',
                    location: 'Arts and Sciences 101',
                    instructor: 'Preston Buterbaugh'
                }
            },
            {
                id: '2',
                start: getDateOfWeek(1, 13, 25),
                end: getDateOfWeek(1, 14, 20),
                backgroundColor: "#DAD870",
                extendedProps: {
                    course: 'PHYS 2002',
                    courseName: 'Physics II',
                    location: 'Lindner Hall 104',
                    instructor: 'Madi Coulson'
                }
            },
            {
                id: '3',
                start: getDateOfWeek(2, 11, 0),
                end: getDateOfWeek(2, 12, 30),
                backgroundColor: "#FFCD58",
                extendedProps: {
                    course: 'ENGL 1001',
                    courseName: 'Composition',
                    location: 'French Hall 450',
                    instructor: 'Nate Louder'
                }
            },
            {
                id: '4',
                start: getDateOfWeek(2, 16, 0),
                end: getDateOfWeek(2, 17, 20),
                backgroundColor: "#83d2f1",
                extendedProps: {
                    course: 'COMM 1071',
                    courseName: 'Public Speaking',
                    location: 'Baldwin 240',
                    instructor: 'Chloe Beletti'
                }
            },
            {
                id: '5',
                start: getDateOfWeek(3, 9, 0),
                end: getDateOfWeek(3, 9, 55),
                backgroundColor: "#FF5C4D",
                extendedProps: {
                    course: 'MATH 1061',
                    courseName: 'Calculus I',
                    location: 'Arts and Sciences 101',
                    instructor: 'Preston Buterbaugh'
                }
            },
            {
                id: '6',
                start: getDateOfWeek(3, 13, 25),
                end: getDateOfWeek(3, 14, 20),
                backgroundColor: "#DAD870",
                extendedProps: {
                    course: 'PHYS 2002',
                    courseName: 'Physics II',
                    location: 'Lindner Hall 104',
                    instructor: 'Madi Coulson'
                }
            },
            {
                id: '7',
                start: getDateOfWeek(4, 11, 0),
                end: getDateOfWeek(4, 12, 30),
                backgroundColor: "#FFCD58",
                extendedProps: {
                    course: 'ENGL 1001',
                    courseName: 'Composition',
                    location: 'French Hall 450',
                    instructor: 'Nate Louder'
                }
            },
            {
                id: '8',
                start: getDateOfWeek(4, 16, 0),
                end: getDateOfWeek(4, 17, 20),
                backgroundColor: "#83d2f1",
                extendedProps: {
                    course: 'COMM 1071',
                    courseName: 'Public Speaking',
                    location: 'Baldwin 240',
                    instructor: 'Chloe Beletti'
                }
            },
            {
                id: '9',
                start: getDateOfWeek(5, 9, 0),
                end: getDateOfWeek(5, 9, 55),
                backgroundColor: "#FF5C4D",
                extendedProps: {
                    course: 'MATH 1061',
                    courseName: 'Calculus I',
                    location: 'Arts and Sciences 101',
                    instructor: 'Preston Buterbaugh'
                }
            },
            {
                id: '10',
                start: getDateOfWeek(5, 13, 25),
                end: getDateOfWeek(5, 14, 20),
                backgroundColor: "#DAD870",
                extendedProps: {
                    course: 'PHYS 2002',
                    courseName: 'Physics II',
                    location: 'Lindner Hall 104',
                    instructor: 'Madi Coulson'
                }
            },
        ]
    }
}