import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useI18n } from 'next-localization';


interface Project {
  projectId: number;
  projectName: string;
}

interface ProjectManager {
  projectManagerId: number;
  projectManagerName: string;
}

interface Employee {
  employeeId: number;
  employeeName: string;
  projects: Project;
  projectManager: ProjectManager;
}

const EmployeeDetails = () => {
  const { t } = useI18n();
  const router = useRouter();
  debugger

  const { path } = router.query;
  const employeeId = path ? path[1] : null;

  // const { path } = router.query; 
  // const employeeId = path ? path[path.length - 1] : null; 

  const [employees, setEmployees] = useState<Employee[]>([]);
  console.log("EmployeeId", employeeId)

  useEffect(() => {
    const fetchEmployeeData = async () => {
      if (!employeeId) return;

      try {
        console.log(`Fetching data for employeeId: ${employeeId}`);
        const response = await fetch(
          `http://localhost:5065/Employee/GetEmployeeById?employeeId=${employeeId}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: Employee[] = await response.json();
        console.log('Fetched employee data:', data);

        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };
    
    fetchEmployeeData();
  }, [employeeId]);

  if (employees.length === 0) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {employees.map(employee => (
            <div key={employee.employeeId} className="col-md-8 offset-md-2 mb-4">
              <div className="card shadow-lg">
                <div className="card-header bg-primary text-white">
                  <h2 className="mb-0">{t('EmployeeDetails')}</h2>
                </div>
                <div className="card-body">
                  <h4 className="mb-4">{t('EmployeeInformation')}</h4>
                  <p><strong>Employee ID:</strong> {employee.employeeId}</p>
                  <p><strong>Employee Name:</strong> {employee.employeeName.trim()}</p>
                  <hr />
                  <h4 className="mt-4 mb-4">{t('ProjectInformation')}</h4>
                  <p><strong>Project Id:</strong> {employee.projects.projectId}</p>
                  <p><strong>Project Name:</strong> {employee.projects.projectName}</p>
                  <hr />
                  <h4 className="mt-4 mb-4">{t('ProjectManagerInformation')}</h4>
                  <p><strong>Project Manager Id:</strong> {employee.projectManager.projectManagerId}</p>
                  <p><strong>Project Manager Name:</strong> {employee.projectManager.projectManagerName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
