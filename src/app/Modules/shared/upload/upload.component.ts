import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @Output() public OnUpload = new EventEmitter();
  message!: string
  progress: number = 0
  fileToUpload: File | null = null
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }


  uploadFile = (files: any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = files.target.files[0];
    console.log(this.fileToUpload)
    const formData = new FormData();
    formData.append('file', fileToUpload, this.fileToUpload?.name);

    this.http.post(environment.imageurl, formData, { reportProgress: true, observe: 'events' }).subscribe({
      next: (event) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total!);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.OnUpload.emit(event.body);
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }
}
