

// ============= بيانات وهمية (Mock Data) =============
function getMockData(subject, month) {
    const subjectsData = {
        'CS309': { students: 124, questions: 158, passRate: 84, attendance: 98, weeklyAttendance: [88,92,95,98] },
        'CS202': { students: 108, questions: 135, passRate: 79, attendance: 85, weeklyAttendance: [76,80,82,85] },
        'CS303': { students: 97, questions: 118, passRate: 89, attendance: 90, weeklyAttendance: [82,86,88,90] }
    };
    const subjectData = subjectsData[subject] || subjectsData['CS309'];
    
    const monthNames = { 
        '2026-01':'January', '2026-02':'February', '2026-03':'March',
        '2026-04':'April', '2026-05':'May', '2026-06':'June'
    };
    
    const recentAttendance = [
        { name: 'Ali Hassan', studentId: '2024001', time: '08:30 AM', status: 'present', date: '2026-04-17' },
        { name: 'Sara Mahmoud', studentId: '2024002', time: '09:00 AM', status: 'late', date: '2026-04-17' },
        { name: 'Khaled Mohamed', studentId: '2024150', time: '--', status: 'absent', date: '2026-04-10' },
        { name: 'Nour Abdelrahman', studentId: '2024103', time: '08:45 AM', status: 'present', date: '2026-04-16' },
        { name: 'Omar Hossam', studentId: '2024003', time: '09:15 AM', status: 'late', date: '2026-04-16' },
        { name: 'Mariam Tarek', studentId: '2024102', time: '08:20 AM', status: 'present', date: '2026-04-15' },
        { name: 'Laila Hassan', studentId: '2024004', time: '08:50 AM', status: 'present', date: '2026-04-15' }
    ];
    
    const studentsStats = {
        '2024001': { present: 22, late: 2, absent: 1, totalDays: 25, attendanceRate: 88 },
        '2024002': { present: 18, late: 4, absent: 3, totalDays: 25, attendanceRate: 72 },
        '2024003': { present: 20, late: 3, absent: 2, totalDays: 25, attendanceRate: 80 },
        '2024004': { present: 23, late: 1, absent: 1, totalDays: 25, attendanceRate: 92 },
        '2024102': { present: 19, late: 3, absent: 3, totalDays: 25, attendanceRate: 76 },
        '2024103': { present: 21, late: 2, absent: 2, totalDays: 25, attendanceRate: 84 },
        '2024105': { present: 15, late: 4, absent: 6, totalDays: 25, attendanceRate: 60 },
        '2024108': { present: 17, late: 3, absent: 5, totalDays: 25, attendanceRate: 68 },
        '2024150': { present: 8, late: 2, absent: 15, totalDays: 25, attendanceRate: 32 }
    };
    
    const absentStudents = [
        { name: 'Khaled Mohamed', id: '2024150' },
        { name: 'Seif Eldin', id: '2024105' },
        { name: 'Rana Wael', id: '2024104' }
    ];
    
    const lastStudents = [
        { name: 'Ali Hassan', id: '2024001' },
        { name: 'Sara Mahmoud', id: '2024002' },
        { name: 'Omar Khaled', id: '2024003' },
        { name: 'Laila Ahmed', id: '2024004' }
    ];
    
    return {
        totalStudents: subjectData.students,
        attendanceCount: subjectData.attendance,
        totalQuestions: subjectData.questions,
        passRate: subjectData.passRate,
        weeklyAttendance: subjectData.weeklyAttendance,
        questionsByType: [
            { label: 'Multiple Choice', count: Math.floor(subjectData.questions * 0.58), type: 'mcq' },
            { label: 'True / False', count: Math.floor(subjectData.questions * 0.26), type: 'true_false' },
            { label: 'Essay', count: Math.floor(subjectData.questions * 0.16), type: 'essay' }
        ],
        recentAttendance: recentAttendance,
        absentStudents: absentStudents,
        lastStudents: lastStudents,
        studentsStats: studentsStats,
        subjectName: subject === 'CS309' ? 'System Analysis (CS309)' : 
                    (subject === 'CS202' ? 'Data Structures (CS202)' : 'Software Engineering (CS303)'),
        monthName: monthNames[month] || month
    };
}



async function fetchDashboardData(subject, month) {
    if (window.USE_FIREBASE && window.isFirebaseReady) {
        try {
            const data = await getFirebaseData(subject, month);
            return { success: true, data: data, source: 'firebase' };
        } catch (error) {
            console.error('Firebase error:', error);
            const mockData = getMockData(subject, month);
            return { success: true, data: mockData, source: 'mock (fallback)', error: error.message };
        }
    } else {
        const mockData = getMockData(subject, month);
        return { success: true, data: mockData, source: 'mock' };
    }
}


window.fetchDashboardData = fetchDashboardData;
window.getMockData = getMockData;
