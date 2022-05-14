import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public minDate: Date;
    public ngForm: FormGroup;
    public range = this.createRangeFormGroup();

    readonly maxChildren: number[] = Array(5)
        .fill(0)
        .map((x, i) => i + 1);
    readonly maxAdult: number[] = Array(5)
        .fill(0)
        .map((x, i) => i + 1);

    constructor(private fb: FormBuilder) {
        const today = new Date();
        const date = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();

        this.minDate = new Date(year, month, date);

        this.ngForm = this.createForm();
    }

    ngOnInit(): void {}

    onSubmit(): void {}

    createForm() {
        return this.fb.group({
            adult: [0, [Validators.required, Validators.minLength(10)]],
            children: [0, [Validators.required, Validators.minLength(10)]],
        });
    }

    createRangeFormGroup() {
        const today = new Date();
        const date = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();

        return this.fb.group({
            start: new FormControl(new Date(year, month, date)),
            end: new FormControl(new Date(year, month, date)),
        });
    }
}
