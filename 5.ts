import { Injectable } from "@angular/core"
import { BehaviorSubject, type Observable } from "rxjs"
import type { User } from "../models/user.model"

@Injectable({
  providedIn: "root",
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: "John Doe",
      workouts: [
        { type: "Running", minutes: 30 },
        { type: "Cycling", minutes: 45 },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      workouts: [
        { type: "Swimming", minutes: 60 },
        { type: "Running", minutes: 20 },
      ],
    },
    {
      id: 3,
      name: "Mike Johnson",
      workouts: [
        { type: "Yoga", minutes: 50 },
        { type: "Cycling", minutes: 40 },
      ],
    },
  ]

  private usersSubject = new BehaviorSubject<User[]>(this.users)

  getUsers(): Observable<User[]> {
    return this.usersSubject.asObservable()
  }

  addUser(user: User): void {
    this.users.push(user)
    this.usersSubject.next(this.users)
  }
}

