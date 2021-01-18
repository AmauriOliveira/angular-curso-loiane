import { Component, OnInit, OnDestroy } from '@angular/core';
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
        .upload(this.files, 'http://localhost:3333/upload')
        .subscribe((response: any) => console.log('upload concluido'));
    }
  }

  ngOnDestroy() {
    // Todo se desecrever aki
  }
}
