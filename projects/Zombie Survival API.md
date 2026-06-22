# Zombie Survival API

## Overview

Civilization has collapsed following a global zombie outbreak.

Human survivors must organize communities, manage resources, establish shelters, and coordinate rescue missions.

The purpose of this project is to build the backend platform used by survivor communities.

The application will evolve over time as new challenges emerge.

---

# Sprint 1 Scope

Implement CRUD operations for:

* Survivors
* Safe Houses
* Supplies
* Rescue Missions

---

# Domain Model

## Survivor

| Field           | Type   |
| --------------- | ------ |
| id              | UUID   |
| name            | string |
| age             | number |
| profession      | string |
| infectionStatus | string |

Rules:

* Name required
* Age > 0

---

## Safe House

| Field    | Type   |
| -------- | ------ |
| id       | UUID   |
| name     | string |
| location | string |
| capacity | number |

Rules:

* Capacity > 0

---

## Supply

| Field    | Type   |
| -------- | ------ |
| id       | UUID   |
| name     | string |
| quantity | number |
| type     | string |

Rules:

* Quantity >= 0

---

## Rescue Mission

| Field       | Type   |
| ----------- | ------ |
| id          | UUID   |
| name        | string |
| destination | string |
| status      | string |

Rules:

* Name required
* Status required

---

# API Requirements

CRUD endpoints for every entity.

Example:

GET /survivors

POST /survivors

PUT /survivors/{id}

DELETE /survivors/{id}

---

# Testing Requirements

Minimum:

* Unit Tests
* Validation Tests
* Service Tests

Target Coverage:

80%

---

# Continuous Integration

Every Pull Request must:

* Build successfully
* Pass tests
* Pass linting

No direct commits to main branch.

---

# Future Iterations

Additional requirements may include:

* Infection spreading
* Resource consumption
* Survivor skills
* Community reputation
* Rescue success probability
* Safe House occupancy management
* Trading between communities
