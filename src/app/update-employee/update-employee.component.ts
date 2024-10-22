import { Component } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  id: number = 0;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,private permissionService: PermissionService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      //this.toastr.success('Employee Updated Successfully!', 'Success!');
      this.goToEmployeeList();
    }
      , error => {
        this.toastr.error(error.error.message, 'Error!');
        console.log(error);
      }
      );
  }
  checkPermission(){
    return this.permissionService.canEditField();
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
