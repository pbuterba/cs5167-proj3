export const presetStudentData = {
    name: "John Smith",
    college: "CEAS",
    major: "Computer Science",
    minor: "Economics",
    GPA: "3.87",
    currentCreditHours: 17,
    creditsTaken: 64,

    acadmicAdvisorName: "Alice Turner",
    academicAdvisorEmail: "alice.turner@uc.edu",
    coopAdvisorName: "Sam Maxwell",
    coopAdvisorEmail: "sam.maxwell@uc.edu",

    curriculum: {
        academicYears: [
            {
                name: "Fall 2021 - Summer 2022",
                semesters: [
                    {
                        name: "Fall 2021",
                        classes: [
                            {
                                number: "MATH 1061",
                                name: "Calculus I",
                                credits: 4,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "A-"
                            },
                            {
                                number: "CHEM 1040",
                                name: "General Chemistry I",
                                credits: 4,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "A"
                            },
                            {
                                number: "ENGL 1001",
                                name: "English Composition",
                                credits: 3,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "A"
                            },
                            {
                                number: "CS 1001",
                                name: "Intro to Computer Science",
                                credits: 1,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "P"
                            },
                            {
                                number: "ENED 1100",
                                name: "Foundations of Engineering Design Thinking I",
                                credits: 3,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "B"
                            },
                            {
                                number: "CHEM 1040L",
                                name: "General Chemistry Lab I",
                                credits: 1,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "A"
                            }
                        ],
                        options: [],
                        placeholders: []
                    },
                    {
                        name: "Spring 2022",
                        classes: [
                            {
                                number: "MATH 1062",
                                name: "Calculus II",
                                credits: 4,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "B-"
                            },
                            {
                                number: "CS 1021C",
                                name: "Computer Science I",
                                credits: 4,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "A"
                            },
                            {
                                number: "PD 1011",
                                name: "Intro to Co-op for CEAS",
                                credits: 1,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "A"
                            },
                            {
                                number: "ENED 1120",
                                name: "Foundations of Engineering Design Thinking II",
                                credits: 3,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "B"
                            }
                        ],
                        options: [
                            {
                                name: "Science Elective",
                                credits: 4,
                                fulfilledNumber: "CHEM 1041",
                                fulfilledName: "General Chemistry II",
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "A",
                                fulfillmentOptions: [
                                    {
                                        number: "PHYS 2001",
                                        name: "College Physics I (Calculus-based)"
                                    },
                                    {
                                        number: "CHEM 1041",
                                        name: "General Chemistry II"
                                    },
                                    {
                                        number: "BIOL 1081",
                                        name: "Biology I: Molecules, Cells, and the Foundation of Life"
                                    }
                                ]
                            },
                            {
                                name: "Science Elective Lab",
                                credits: 1,
                                fulfilledNumber: "CHEM 1041L",
                                fulfilledName: "General Chemistry Lab II",
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "A",
                                fulfillmentOptions: [
                                    {
                                        number: "PHYS 2001L",
                                        name: "College Physics Lab I (Calculus-based)"
                                    },
                                    {
                                        number: "CHEM 1041L",
                                        name: "General Chemistry Lab II"
                                    },
                                    {
                                        number: "BIOL 1081",
                                        name: "Biology I Lab"
                                    }
                                ]
                            }
                        ],
                        placeholders: []
                    },
                    {
                        name: "Summer 2022",
                        classes: [],
                        options: [],
                        placeholders: []
                    }
                ]
            },
            {
                name: "Fall 2022 - Summer 2023",
                semesters: [
                    {
                        name: "Fall 2022",
                        classes: [
                            {
                                number: "CS 2011",
                                name: "Intro to Computer Systems",
                                credits: 3,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "C"
                            },
                            {
                                number: "CS 2023",
                                name: "Python Programming",
                                credits: 2,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "A"
                            },
                            {
                                number: "CS 2028C",
                                name: "Data Structures",
                                credits: 4,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "A"
                            },
                            {
                                number: "IT 2030C",
                                name: "Information Security & Assurance",
                                credits: 3,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "A-"
                            },
                            {
                                number: "MATH 2076",
                                name: "Linear Algebra",
                                credits: 3,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "B"
                            }
                        ],
                        options: [],
                        placeholders: []
                    },
                    {
                        name: "Spring 2023",
                        classes: [
                            {
                                number: "COOP 2011",
                                name: "Co-op for CEAS (First Semester Experience)",
                                credits: 0,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "P"
                            }
                        ],
                        options: [],
                        placeholders: []
                    },
                    {
                        name: "Summer 2023",
                        classes: [
                            {
                                number: "CS 2071",
                                name: "Discrete Computational Structures",
                                credits: 3,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "A"
                            },
                            {
                                number: "CS 3003",
                                name: "Programming Languages",
                                credits: 3,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "A"
                            },
                            {
                                number: "STAT 2037",
                                name: "Probability and Statistics I",
                                credits: 3,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "B"
                            },
                            {
                                number: "ENGL 2089",
                                name: "Intermediate Composition",
                                credits: 3,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "B+"
                            },
                        ],
                        options: [],
                        placeholders: [1]
                    }
                ]
            },
            {
                name: "Fall 2023 - Summer 2024",
                semesters: [
                    {
                        name: "Fall 2023",
                        classes: [
                            {
                                number: "COOP 2012",
                                name: "Co-op for CEAS (Second Semester Experience)",
                                credits: 0,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "P"
                            }
                        ],
                        options: [],
                        placeholders: []
                    },
                    {
                        name: "Spring 2024",
                        classes: [
                            {
                                number: "CS 4071",
                                name: "Design & Analysis of Algorithms",
                                credits: 3,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "B+"
                            },
                            {
                                number: "CS 4092",
                                name: "Database Design and Development",
                                credits: 3,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "B"
                            },
                            {
                                number: "EECE 3093C",
                                name: "Software Engineering",
                                credits: 4,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "A"
                            },
                            {
                                number: "COMM 1071",
                                name: "Intro to Effective Speaking",
                                credits: 3,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "A"
                            },
                        ],
                        options: [],
                        placeholders: [1]
                    },
                    {
                        name: "Summer 2024",
                        classes: [
                            {
                                number: "COOP 3011",
                                name: "Co-op for CEAS (Third Semester Experience)",
                                credits: 0,
                                completed: true,
                                inProgress: true,
                                registered: true,
                                grade: "P"
                            }
                        ],
                        options: [],
                        placeholders: []
                    }
                ]
            },
            {
                name: "Fall 2024 - Summer 2025",
                semesters: [
                    {
                        name: "Fall 2024",
                        classes: [
                            {
                                number: "EECE 4029",
                                name: "Operating Systems & Systems Programming",
                                credits: 3,
                                completed: false,
                                inProgress: true,
                                registered: true,
                                grade: null
                            },
                            {
                                number: "CS 4033",
                                name: "AI Principles and Applications",
                                credits: 3,
                                completed: false,
                                inProgress: true,
                                registered: true,
                                grade: null
                            },
                            {
                                number: "CS 4065",
                                name: "Computer Networks and Networked Computing",
                                credits: 3,
                                completed: false,
                                inProgress: true,
                                registered: true,
                                grade: null
                            },
                            {
                                number: "ENGL 4092",
                                name: "Technical & Scientific Writing",
                                credits: 3,
                                completed: false,
                                inProgress: true,
                                registered: true,
                                grade: null
                            },
                        ],
                        options: [],
                        placeholders: [1]
                    },
                    {
                        name: "Spring 2025",
                        classes: [
                            {
                                number: "COOP 4011",
                                name: "Co-op for CEAS (Fourth Semester Experience)",
                                credits: 0,
                                completed: false,
                                inProgress: false,
                                registered: true,
                                grade: null
                            }
                        ],
                        options: [],
                        placeholders: []
                    },
                    {
                        name: "Summer 2025",
                        classes: [
                            {
                                number: "COOP 4012",
                                name: "Co-op for CEAS (Fifth Semester Experience)",
                                credits: 0,
                                completed: false,
                                inProgress: false,
                                registered: false,
                                grade: "P"
                            }
                        ],
                        options: [],
                        placeholders: []
                    }
                ]
            },
            {
                name: "Fall 2025 - Spring 2026",
                semesters: [
                    {
                        name: "Fall 2025",
                        classes: [
                            {
                                number: "CS 5170",
                                name: "Theory of Formal Languages and Automata",
                                credits: 3,
                                completed: false,
                                inProgress: false,
                                registered: false,
                                grade: null
                            },
                        ],
                        options: [
                            {
                                name: "Senior Design I",
                                credits: 3,
                                fulfilledNumber: null,
                                fulfilledName: null,
                                completed: false,
                                inProgress: false,
                                registered: false,
                                grade: null,
                                fulfillmentOptions: [
                                    {
                                        name: "Computer Science Senior Design I",
                                        number: "CS 5001"
                                    },
                                    {
                                        name: "Electrical Engineering Senior Design I",
                                        number: "EECE 5001"
                                    }
                                ]
                            }
                        ],
                        placeholders: [2, 2, 3]
                    },
                    {
                        name: "Spring 2026",
                        classes: [],
                        options: [
                            
                            {
                                name: "Senior Design II",
                                credits: 3,
                                fulfilledNumber: null,
                                fulfilledName: null,
                                completed: false,
                                inProgress: false,
                                registered: false,
                                grade: null,
                                fulfillmentOptions: [
                                    {
                                        name: "Computer Science Senior Design II",
                                        number: "CS 5001"
                                    },
                                    {
                                        name: "Electrical Engineering Senior Design II",
                                        number: "EECE 5001"
                                    }
                                ]
                            }
                        ],
                        placeholders: [2, 2, 2, 3]
                    }
                ]
            }
        ],
        placeholders: [
            {
                name: "Breadth of Knowledge Class",
                fulfillments: [
                    {
                        number: "ASL 1003",
                        name: "Orientation to Deafness",
                        credits: 3,
                        completed: true,
                        inProgress: true,
                        registered: true,
                        grade: null
                    },
                    {
                        number: "ENGL 2003",
                        name: "The Magic of Harry Potter",
                        credits: 3,
                        completed: true,
                        inProgress: true,
                        registered: true,
                        grade: null
                    },
                    {
                        number: "AMEC 2050C",
                        name: "Web Design I",
                        credits: 3,
                        completed: false,
                        inProgress: true,
                        registered: true,
                        grade: null
                    }
                ]
            },
            {
                name: "Computer Science Elective",
                fulfillments: []
            },
            {
                name: "General Elective",
                fulfillments: []
            }
        ]
    },
}