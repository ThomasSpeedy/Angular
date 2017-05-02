import {Component} from '@angular/core';
import {Observable}  from 'rxjs/Observable';
import {Observer}  from 'rxjs/Observer';
import {Subscriber}  from 'rxjs/Subscriber';
import {Subscription}  from 'rxjs/Subscription';
import {Subject}  from 'rxjs/Subject';
import {BehaviorSubject}  from 'rxjs/BehaviorSubject';

@Component({
  templateUrl: 'rxdemo.component.html',
  styleUrls: ['rxdemo.component.css'],
})
export class RxDemoComponent {

  outputFirstObservable: any[] = [];

  observableRangeOutput: any[] = [];

  intervalOutput: any[] = [];
  filteredIntervalOutput: any[] = [];
  bufferedIntervalOutput: any[] = [];

  clickSubject = new Subject();

  firstObservable: Observable<number>;

  rangeObservable: Observable<number>;

  currentTime: Observable<Date>;


  constructor() {

    // Erfolgreiches observable
    const observable = Observable.create((observer: Observer<number>) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    observable.subscribe(
      (value) => {
        console.log('new value: ', value);
      },
      (error) => {
        console.log('error: ', error);
      },
      () => {
        console.log('completed successfully');
      }
    );

    console.log('----- Observable mit zufälligem Fehler ----');

    const observableWithRandomError = Observable.create((observer) => {
      observer.next(1);
      observer.next(2);
      if (Math.random() > 0.3) {
        observer.error('something went wrong!');
      }
      observer.next(3);
      observer.complete();
    }).retry(5);

    observableWithRandomError.subscribe(
      (value) => {
        console.log('new value: ', value);
      },
      (error) => {
        console.log('error: ', error);
      },
      () => {
        console.log('completed successfully');
      }
    );

    console.log('----- Verzögertes Retry ----');

    const observableDelayedRetry = Observable.create((observer) => {
      observer.next(1);
      observer.next(2);
      if (Math.random() > 0.3) {
        observer.error('something went wrong!');
      }
      observer.next(3);
      observer.complete();
    }).retryWhen((error) => {
      return error.delay(1000);
    });

    observableDelayedRetry.subscribe(
      (value) => {
        console.log('new value: ', value);
      },
      (error) => {
        console.log('error: ', error);
      },
      () => {
        console.log('completed successfully');
      }
    );

    console.log('----- 3 mal verzögertes Retry ----');

    const obsIncrementalRetry = Observable.create((observer) => {
      observer.next(1);
      observer.next(2);
      if (Math.random() > 0.02) {
        observer.error('something went wrong!');
      }
      observer.next(3);
      observer.complete();
    }).retryWhen((errors) => {
      return errors.mergeMap((error, index) => {
        if (index >= 5) {
          throw error;
        }
        console.log('Neuer Versuch in ' + index + ' Sekunden');
        return Observable.of(error).delay(index * 1000);
      });
    });


    obsIncrementalRetry.subscribe(
      (value) => {
        console.log('new value: ', value);
      },
      (error) => {
        console.log('error: ', error);
      },
      () => {
        console.log('completed successfully');
      }
    );

    //OBSERVABLES ERZEUGEN

    const observableOf = Observable.of(1, 2, 3);

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved value');
      }, 100);
    });

    Observable.from(promise).subscribe(value => {
      console.log(value); //resolved value
    });

    Observable.range(1, 3).subscribe(this.createOutputSubscriber(this.observableRangeOutput));


    this.currentTime = Observable.timer(0, 1000)
      .map(() => new Date());

    Observable.merge(
      Observable.range(1, 2),
      Observable.range(5, 2)
    ).subscribe((value) => console.log('merged: ', value));


    // Operatoren

    const squareValues = Observable.range(1, 5)
      .do(value => console.log('Ursprungswert: ', value))
      .map(value => value * value)
      .subscribe(result => console.log('Quadratwert: ', result));

    Observable.range(1, 10)
      .filter(value => value % 2 == 0);


    const subject1 = new Subject();
    subject1.subscribe(value => {
      console.log(`subscriber1: ${value}`);
    });
    subject1.subscribe(value => {
      console.log(`subscriber2: ${value}`);
    });

    subject1.next('value1');
    subject1.next('value2');

    const subject = new BehaviorSubject('initial');
    subject.subscribe(value => {
      console.log(`subscriber1: ${value}`);
    });
    subject.next('value1');
    subject.next('value2');

    console.log('subscribing second subscriber');
    subject.subscribe(value => {
      console.log(`subscriber2: ${value}`);
    });
    subject.next('value3');


  }

  ngOnInit() {
    const square = document.getElementById('square');
    Observable.fromEvent(square, '')
      .subscribe((e: any) => {
        console.log(`X: ${e.x},Y: ${e.y}`);
      });
  }

  createOutputSubscriber(output) {
    return Subscriber.create((value) => {
        output.push(`new value: ${value}`);
      },
      (error) => {
        output.push(`error: ${error}`);
      },
      () => {
        output.push('completed successfully');
      });
  }

  startIntervalObservable() {
    this.intervalOutput = [];
    //  Observable.timer(1000, 200).;

    Observable.interval(250).take(5).subscribe(
      this.createOutputSubscriber(this.intervalOutput)
    )
  }

  startFilteredIntervalObservable() {
    this.filteredIntervalOutput = [];
    Observable.interval(250)
      .take(10)
      .filter(value => value % 2 == 0)
      .subscribe(
        this.createOutputSubscriber(this.filteredIntervalOutput)
      )
  }

  startBufferedIntervalObservable() {
    this.bufferedIntervalOutput = [];
    Observable.interval(250)
      .bufferTime(1000)
      .take(5)
      .subscribe(
        this.createOutputSubscriber(this.bufferedIntervalOutput)
      )
  }

  bufferedCountOutput: any[] = [];

  startBufferedCountObservable() {
    this.bufferedCountOutput = [];
    Observable.interval(250)
      .bufferCount(4)
      .take(5)
      .subscribe(
        this.createOutputSubscriber(this.bufferedCountOutput)
      )
  }

  subscription: Subscription;
  endlessCounter = 0;

  startEndlessObservable() {
    this.subscription = Observable.interval(100)
      .subscribe(
        value => {this.endlessCounter = value;},
        error => {console.log(error);},
        () => {console.log('observable ended');})
  }
  stopEndlessObservable() {
    this.subscription.unsubscribe();
  }

  randomValuesSub: Subscription;


  randomValues = Observable.create((observer) => {
    console.log('start');
    const interval = setInterval(() => {
      observer.next(Math.random());
    }, 1000);

    return () => {
      console.log('clearing interval');
      clearInterval(interval);
    }
  });


  randomValue: number;
  startRandomValuesObservable() {
    this.randomValuesSub = this.randomValues.subscribe((value) => {
      this.randomValue = value;
    });
  }
  stopRandomValuesObservable() {
    this.randomValuesSub.unsubscribe(); //clearing interval
  }

  //Subjects:

  subject = new Subject();
  subjectOutput = [];

  emitViaSubject(value: any) {
    //sende Wert an alle Subscriber
    this.subject.next(value);
  }

  registerTwoSubscribers() {
    this.subject.subscribe(value => {
      this.subjectOutput.push(`subscriber1 ${value}`);
    });
    this.subject.subscribe(value => {
      this.subjectOutput.push(`subscriber2 ${value}`);
    });
  }

  behaviorSubject = new BehaviorSubject('initial');
  behaviorSubjectOutput = [];
  emitViaBehaviorSubject(value: any) {
    //sende Wert an alle Subscriber
    this.behaviorSubject.next(value);
  }

  registerNewSubscriber(name: string) {
    this.behaviorSubject.subscribe(value => {
      this.behaviorSubjectOutput.push(`${name}: ${value}`);
    });
  }





}
