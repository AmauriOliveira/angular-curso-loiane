import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadFileService {
  constructor(private http: HttpClient) {}

  upload(files: Set<File>, url: string): any {
    const formData = new FormData();

    files.forEach((file) => formData.append('file', file, file.name));

    // const request = new HttpRequest('POST', url, formData);
    // return this.http.request(request);

    return this.http.post(url, formData, {
      observe: 'events',
      reportProgress: true,
    }); // outra forma da linha acima
  }

  download(url: string): any {
    return this.http.get(url, { responseType: 'blob' as 'json' });
  }

  handleFile(response: any, fileName: string): any {
    const blob = new Blob([response], { type: response.type });

    // IE
    if (window.navigator?.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob);
      return;
    }

    const file = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = file;
    link.download = fileName;

    //link.click();
    link.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      })
    );
    // para o firefox deletar requer um daley
    setTimeout(() => {
      window.URL.revokeObjectURL(file);
      link.remove();
    }, 100);
  }
}
