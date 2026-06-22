# Interplanetary Trading Company API

## Overview

Welcome to the Interplanetary Trading Company (ITC).

Humanity has expanded beyond Earth and established colonies across multiple planets. The Interplanetary Trading Company is responsible for managing trade operations between colonies, space stations, and transport vessels.

Your mission is to build the backend system that will eventually power these operations.

The project will evolve over multiple development iterations. New requirements will be introduced throughout the training, and the system must be designed to accommodate change while maintaining code quality and reliability.

---

# Project Scope - Sprint 1

For the first week, the objective is to establish the foundation of the application and implement the first domain modules.

The following entities must be implemented.

---

# Planet

Represents a colonized world.

Properties:

| Field      | Type     |
| ---------- | -------- |
| id         | UUID     |
| name       | string   |
| sector     | string   |
| population | number   |
| createdAt  | datetime |

Business Rules:

* Name is required
* Population cannot be negative

---

# Space Station

Represents a station orbiting a planet.

Properties:

| Field           | Type   |
| --------------- | ------ |
| id              | UUID   |
| name            | string |
| planetId        | UUID   |
| dockingCapacity | number |

Business Rules:

* Name is required
* Docking capacity must be greater than zero
* Station must belong to an existing planet

---

# Ship

Represents a transport vessel.

Properties:

| Field            | Type   |
| ---------------- | ------ |
| id               | UUID   |
| name             | string |
| captainName      | string |
| cargoCapacity    | number |
| currentStationId | UUID   |

Business Rules:

* Name is required
* Cargo capacity must be greater than zero

---

# Cargo

Represents goods transported between planets.

Properties:

| Field          | Type   |
| -------------- | ------ |
| id             | UUID   |
| name           | string |
| weight         | number |
| value          | number |
| originPlanetId | UUID   |

Business Rules:

* Name is required
* Weight must be greater than zero
* Value cannot be negative

---

# Functional Requirements

The API must provide CRUD operations for:

* Planets
* Space Stations
* Ships
* Cargo

Example endpoints:

GET /planets

GET /planets/{id}

POST /planets

PUT /planets/{id}

DELETE /planets/{id}

Equivalent endpoints should exist for all entities.

---

## Testing

Automated tests are mandatory.

Minimum requirements:

* Unit tests for business logic
* Service layer coverage
* Validation rule coverage

Target:

* 80% code coverage

---

## Continuous Integration

Every Pull Request must execute:

* Dependency installation
* Linting
* Tests
* Build validation

The Pull Request must not be merged if the pipeline fails.

---

# Future Iterations

Future requirements will be introduced after Sprint 1.

Possible additions include:

* Trade routes
* Cargo assignments
* Mission management
* Dynamic pricing
* Ship certifications
* Fuel consumption
* Route optimization
* Interplanetary economics

The system should be designed with future extension in mind.

Remember:

A successful software system is not one that only works today.

A successful software system is one that can continue evolving tomorrow.
