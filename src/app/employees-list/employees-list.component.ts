import { Component } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent {
  employees: Employee[] =[];
  p: number = 1; // Current page
  constructor(private employeeService: EmployeeService, private router: Router, private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
    console.log(this.employees);
  }

  updateEmployee(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.toastr.success('Employee Deleted Successfully!', 'Success!');
      this.getEmployees();
    })
  }

}
