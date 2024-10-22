import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css',
  providers: [ToastrModule]
})
export class CreateEmployeeComponent implements OnInit{
  employee: Employee = new Employee();
  age: number =0;
  dateSelected: Date =new Date();
  constructor(private employeeService: EmployeeService,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
        this.goToEmployeeList();
    },
      error => {this.toastr.error(error.error.message, 'Error!');
      console.log(error);
    });
  }

  calculateAge(value:any){
    if (value.target.valueAsDate && value.target.valueAsDate instanceof Date) {
      var timeDiff = Math.abs(Date.now() - value.target.valueAsDate.getTime());
      this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
  }



  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }


  onSubmit() {
    console.log(this.employee);
    
    this.saveEmployee();
  }
}
