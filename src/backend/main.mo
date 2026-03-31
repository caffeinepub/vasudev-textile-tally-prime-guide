import Text "mo:core/Text";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Submission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Submission {
    public func compare(sub1 : Submission, sub2 : Submission) : Order.Order {
      Int.compare(sub2.timestamp, sub1.timestamp);
    };
  };

  let submissions = Map.empty<Text, Submission>();

  func addSubmission(submission : Submission) {
    if (submissions.containsKey(submission.email)) {
      Runtime.trap("Submission with this email already exists");
    };
    submissions.add(submission.email, submission);
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let submission : Submission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    addSubmission(submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray().sort();
  };
};
