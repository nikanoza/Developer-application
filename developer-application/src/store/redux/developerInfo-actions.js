import { applicationsActions } from "./applications-slice";

export const postDate = (obj) => {
    console.log(obj.covidInfo.covidLastDate);
    const fetchData = async() => {
        const response = await fetch('https://bootcamp-2022.devtest.ge/api/application', 
            {
                method: "POST",
                headers: {
                    'accept': 'application/json', 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({   
                    "token": "85f24032-dbef-4cf2-b36e-bfa9f5f87156",
                    "first_name": obj.personalInfo.firstName,
                    "last_name": obj.personalInfo.lastName,
                    "email": obj.personalInfo.email,
                    "phone": obj.personalInfo.mobile || "NAN",
                    "skills": obj.skils,
                    "work_preference": obj.covidInfo.workAt,
                    "had_covid": obj.covidInfo.status,
                    "had_covid_at": obj.covidInfo.covidLastDate || "01-01-1900",
                    "vaccinated": obj.covidInfo.vaccine,
                    "vaccinated_at": obj.covidInfo.lastVaccineDate || "01-01-1900",
                    "will_organize_devtalk": obj.more.attendStatus,
                    "devtalk_topic": obj.more.aboutDevtalk || "NAN",
                    "something_special": obj.more.special
                })
            }    
        );

        if(!response.ok){
            
        }else{
            console.log('work', response.status)
        }
    };

    try{
       fetchData();
    }catch (error){

    };
}

export const fetchApplications = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('https://bootcamp-2022.devtest.ge/api/applications?token=85f24032-dbef-4cf2-b36e-bfa9f5f87156');

            if(!response.ok){
                console.log(response.statusText)
                throw new Error(response.status)
            }
            
            const data = response.json();
            return data;
        };

        try{
            const applications = await fetchData();
            dispatch(applicationsActions.updateApplications(applications))
        }catch (error){

        };
    }
}