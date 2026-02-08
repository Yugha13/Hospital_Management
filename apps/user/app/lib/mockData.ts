
export const mockPatientProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    gender: "male",
    dob: "1990-01-01T00:00:00.000Z",
    emergencyNumber: "987-654-3210",
    healthIssues: "None",
    medicalHistory: "No major surgeries",
};

export const mockHospitals = [
    {
        id: 1,
        hospitalName: "City General Hospital",
        hospitalUrl: "/hospital/city-general",
        hospitalImg: "https://cdn.dribbble.com/users/976984/screenshots/3727819/hospital.gif",
        website: "https://citygeneral.com",
        phone: "555-0123",
    },
    {
        id: 2,
        hospitalName: "St. Mary's Medical Center",
        hospitalUrl: "/hospital/st-marys",
        hospitalImg: "https://media.licdn.com/dms/image/C5612AQHfi6nsfnBalg/article-cover_image-shrink_720_1280/0/1520172399307?e=2147483647&v=beta&t=-SImFWqvA8ZJU7NKxQvKWGKnz9G6GHbC2wbBN8bLroY",
        website: "https://stmarys.com",
        phone: "555-0124",
    }
];

export const mockDoctors = [
    {
        id: 1,
        name: "Dr. Sarah Smith",
        speciality: "Cardiologist",
        img: "https://i.pinimg.com/736x/d3/7e/84/d37e843d31252c02e0b6119d126d6014.jpg",
        email: "sarah.smith@example.com",
    },
    {
        id: 2,
        name: "Dr. James Johnson",
        speciality: "Neurologist",
        img: "https://wallpapers.com/images/hd/pink-angel-cool-profile-picture-wcjxfrrq0kjq98yb.jpg",
        email: "james.johnson@example.com",
    }
];

export const mockAppointments = [
    {
        id: 1,
        name: "Dr. Sarah Smith",
        reason: "Regular Checkup",
        date: "2024-10-25T10:00:00.000Z",
        time: "10:00 AM",
        status: "ACCEPTED",
        doctor: {
            doctorinfo: mockDoctors[0]
        }
    }
];
