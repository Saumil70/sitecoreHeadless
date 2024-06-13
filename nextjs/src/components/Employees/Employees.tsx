import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from 'src/Store/store';
import { setEmployees, setProjects } from 'src/store/Slice';
import { useI18n } from 'next-localization';

export type EmployeeType = {
  employeeId: number;
  employeeName: string;
  projects: {
    projectName: string;
  };
  projectManager: {
    projectManagerName: string;
  };
}

function Employees() {
  const dispatch = useDispatch<AppDispatch>();
  const employees = useSelector((state: RootState) => state.employees.employees);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<string>('');
  // const [projectsList, setProjectsList] = useState<string[]>([]);
  const projectsList = useSelector((state: RootState) => state.employees.projects);

  const { t } = useI18n();

  useEffect(() => {
    if (employees.length === 0) {
      fetchEmployeeData();
    }
    if (projectsList.length === 0) {
      fetchProjects();
    }
  }, []);

  const fetchEmployeeData = async () => {
    try {
      const response = await fetch('http://localhost:5065/Employee');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(setEmployees(data));
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:5065/Employee/GetProjects');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const projectNames = data.map((project: any) => project.projectName);
      dispatch(setProjects(projectNames));
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const searchEmployees = async () => {
    try {
      const url = `http://localhost:5065/Employee/search?searchTerm=${encodeURIComponent(searchTerm)}`

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(setEmployees(data));
    } catch (error) {
      console.error('Error searching employees:', error);
    }
  };

  const filterEmployees = async () => {
    try {
      const url = `http://localhost:5065/Employee/filter?filterTerm=${encodeURIComponent(selectedProject)}`

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(setEmployees(data));
    } catch (error) {
      console.error('Error filtering employees:', error);
    }
  };

  useEffect(() => {
    searchEmployees();
  }, [searchTerm]);

  useEffect(() => {
    filterEmployees();
  }, [selectedProject]);

  return (
    <div className="container">
      <h1 className="mb-4">{t('Employees')}</h1>
      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by employee name, Project Name, Project Manager Name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <select
          className="form-control"
          value={selectedProject}
          onChange={e => setSelectedProject(e.target.value)}
        >
          <option value="">Select Project</option>
          {projectsList.map(project => (
            <option key={project} value={project}>
              {project}
            </option>
          ))}
        </select>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>{t('EmployeeId')}</th>
              <th>{t('EmployeeName')}</th>
              <th>{t('ProjectName')}</th>
              <th>{t('ProjectManagerName')}</th>
              <th>{t('Details')}</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.employeeId}>
                <td>{employee.employeeId}</td>
                <td>{employee.employeeName}</td>
                <td>{employee.projects.projectName}</td>
                <td>{employee.projectManager.projectManagerName}</td>
                {/* <td>
                  <Link className='text-decoration-none' href={`/details/${employee.employeeId}`}>
                    Details
                  </Link>
                </td> */}
                {/* <td><Link className='text-decoration-none' href={{ pathname: '/EmployeeDetails', query: { employeeId: employee.employeeId } }}>Details</Link></td> */}
                <td><Link className='text-decoration-none' href={`/EmployeeDetails/${employee.employeeId}`}>Details</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employees; 