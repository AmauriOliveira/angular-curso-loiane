import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { filterResponse, uploadProgress } from 'src/app/shared/rxjs-operators';
import { environment } from 'src/environments/environment';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit, OnDestroy {
  files!: Set<File>;
  progress = 0;

  constructor(private uploadFileService: UploadFileService) {}

  ngOnInit(): void {}

  onChange(event: any): void {
    // tslint:disable-next-line: deprecation
    const selectedFiles = event.srcElement.files as FileList;
    //document.getElementById('customFileLabel')!.innerHTML =

    selectedFiles[0].name;

    const fileNames = [];
    this.files = new Set();

    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }
    document.getElementById('customFileLabel')!.innerHTML = fileNames.join(
      ', '
    );

    this.progress = 0;
  }

  onUpload(): void {
    if (this.files && this.files.size > 0) {
      this.uploadFileService
        .upload(this.files, `${environment.BASE_URL}/upload`)
        .pipe(
          uploadProgress((progress) => {
            this.progress = progress;
          }),
          filterResponse()
        )
        .subscribe((response: any) => console.log('Upload concluído.'));
      /*       .subscribe((event: HttpEvent<Object>) => {
          if (event.type === HttpEventType.Response) {
            console.log('Upload concluído.');
          } else if (event.type === HttpEventType.UploadProgress) {
            const percentDone = Math.round((event.loaded * 100) / event.total!);

            this.progress = percentDone;
          }
        }); */
    }
  }

  onDownloadExcel(): any {
    this.uploadFileService
      .download(`${environment.BASE_URL}/downloadExcel`)
      .subscribe((response: any) => {
        this.uploadFileService.handleFile(response, 'report.xlsx');
      });
  }

  onDownloadPdf(): any {
    this.uploadFileService
      .download(`${environment.BASE_URL}/downloadPdf`)
      .subscribe((response: any) => {
        this.uploadFileService.handleFile(response, 'report.pdf');
      });
  }

  ngOnDestroy() {
    // Todo se desecrever aki
  }
}
